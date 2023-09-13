const router = require('express').Router();
const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  renderTemplate(Home, { user: req.session.user }, res);
  console.log(req.session.user);
});

module.exports = router;
