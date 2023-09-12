const router = require("express").Router();
const Home = require('../views/Home')
const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
    renderTemplate(Home, {}, res)
});

module.exports = router;