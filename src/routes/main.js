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
    const rating = (ratAll.reduce((acc, cur) => acc + cur, 0) / ratAll.length).toFixed(1);
    renderTemplate(OneRoute, { user: req.session.user, oneRoute, rating }, res);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
