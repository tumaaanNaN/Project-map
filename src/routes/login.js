/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const render = require("../lib/renderTemplate");
const Login = require('../views/Login');

router.get('/', (req, res) => {
  render(Login, {}, res);
});
router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login }, raw: true });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      req.session.user = {
        id: user.id,
        login: user.login,
        location: user.location,
        email: user.email,
      };
      // console.log(req.session.user)
      res.redirect("/");
    } else {
      res.redirect("/home");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/home");
  }
});

module.exports = router;
