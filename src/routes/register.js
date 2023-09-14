/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require('../../db/models');
const render = require("../lib/renderTemplate");
const Register = require('../views/Register');

router.get('/', (req, res) => {
  render(Register, {}, res);
});

router.post("/", async (req, res) => {
  const {
    login, name, password,
  } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    const existUser = await User.findOne({ where: { login } });
    if (existUser) {
      req.session.user = {
        login: existUser.login,
        id: existUser.id,
      };
      res.redirect("/");
    } else {
      const newUser = await User.create({
        login,
        name,
        password: hashPass,
      });
      req.session.user = {
        login: newUser.login,
        id: newUser.id,
      };
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
