const router = require("express").Router();
const Home = require("../views/Home");
const renderTemplate = require("../lib/renderTemplate");
const { Itinerary, User, Info } = require("../../db/models");
const OneRoute = require("../views/OneRoute");

router.get("/", async (req, res) => {
  try {
    console.log(`зашли в main`);
    const routes = await Itinerary.findAll({
      raw: true,
      order: [["rating", "DESC"]],
      include: User,
    });
    renderTemplate(Home, { routes, user: req.session.user }, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Произошла ошибка при получении данных." });
  }
});

// для "подробнее"

router.get("/:id", async (req, res) => {
  try {
    const oneRoute = await Itinerary.findOne({
      raw: true,
      where: { id: [req.params.id] },
      include: User,
    });
    const rat = await Info.findAll({
      raw: true,
      where: { routerId: req.params.id },
    });
    const ratAll = rat.map((el) => Number(el.rating));
    console.log(ratAll, rat);
    const rating = (ratAll.reduce((acc, cur) => acc + cur, 0) / ratAll.length).toFixed(1);
    console.log( 'Рейтинг', rating);
    renderTemplate(OneRoute, { user: req.session.user, oneRoute, rating }, res);
  } catch (e) {
    console.error(e);
  }
});

router.post('/comment', async (req, res) => {
  try {
    const { com, num, id } = req.body;
    if(!com && num){
      res.sendStatus(400);
    } else if (!num) {
      res.sendStatus(401)
    } else if (!com) {
      res.sendStatus(402)
    } else {
      await Info.create({rating: num, feedback: com, routerId: Number(id)})
      res.sendStatus(200);
    }
  }
  catch(err){console.log(err);}
})

module.exports = router;
