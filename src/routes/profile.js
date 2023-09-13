const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();
const Profile = require('../views/Profile');
const Auf = require('../middleware/isAuth');
const { User, Itinerary } = require('../../db/models');

router.get('/', Auf, async (req, res) => {
  // const data = await User(req.session?.user.id, { raw: true });
  renderTemplate(Profile, { user: req.session.user }, res);
});

router.post('/', Auf, async (req, res) => {
  try {
    const {
      from, to, name, comment,
    } = req.body;
    const { id } = req.session.user;
    console.log(from, to, name, comment);
    if (!name && !comment) {
      res.sendStatus(400);
    } else if (!comment) {
      res.sendStatus(401);
    } else if (!name) {
      res.sendStatus(402);
    } else {
      const exitPath = await Itinerary.findOne({ where: { point1: from.join(), point2: to.join() } });
      if (exitPath) {
        res.sendStatus(403);
      } else {
        await Itinerary.create({
          rating: 'Не определен', point1: from.join(), point2: to.join(), name, feedback: comment, user_id: Number(id),
        });
        res.sendStatus(200);
      }
    }
  } catch (err) { console.log(err); }
});

module.exports = router;
