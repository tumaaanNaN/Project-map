const router = require('express').Router();
const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplate');
const { Itinerary, User } = require('../../db/models');
const OneRoute = require('../views/OneRoute');


router.get('/', async (req, res) => {
  try {
    const routes = await Itinerary.findAll({ raw: true, order: [['rating', 'DESC']], include: User }); 
    renderTemplate(Home, { routes, user: req.session.user }, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка при получении данных.' });
  }
});


// для "подробнее"

router.get('/:id', async (req, res) => {
  try {
    const oneRoute = await Itinerary.findOne({raw: true, where: { id: [req.params.id] }, include: User });
      renderTemplate(OneRoute, { user: req.session.user, oneRoute }, res);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
