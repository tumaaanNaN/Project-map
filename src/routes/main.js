const router = require("express").Router();
const Home = require('../views/Home')
const renderTemplate = require('../lib/renderTemplate');
const { Itinerary, User } = require('../../db/models');
const OneRoute = require('../views/OneRoute');

// router.get('/', (req, res) => {
//     renderTemplate(Home, {  }, res)
// });

router.get('/', async (req, res) => {
    try {
      const routes = await Itinerary.findAll({raw: true, order: [['rating', 'DESC']] }); //по убыванию rating
      const author = await User.findAll({raw: true});//findOne
    //   console.log (author, 'автор---------------------------------------');
    //   console.log('routes------------', routes);
      renderTemplate(Home, { routes, author }, res)
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при получении данных.' });
      }
    });

//для "подробнее"

    router.get('/:id', async (req, res) => {
        try {
          const oneRoute = await Itinerary.findOne({ where: { id: [ req.params.id ] } });
          // console.log(everyArt, 'evry--------------------------------------') 
          const author = await User.findAll({raw: true});
          renderTemplate(OneRoute, {oneRoute, author }, res);
      } catch(e) {
          console.error(e);
      }
      })


module.exports = router;