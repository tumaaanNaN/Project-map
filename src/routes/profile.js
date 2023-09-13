const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();
const Profile = require('../views/Profile');
const Auf = require('../middleware/isAuth');
const { User } = require('../../db/models');

router.get('/', Auf, async (req, res) => {
  // const data = await User(req.session?.user.id, { raw: true });
  renderTemplate(Profile, { user: req.session.user }, res);
});

module.exports = router;
