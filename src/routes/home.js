const router = require('express').Router();
const render = require('../lib/renderTemplate');
const Home = require('../views/Home');

router.get('/home', async (req, res) => {
  render(Home, {}, res);
});
module.exports = router;
