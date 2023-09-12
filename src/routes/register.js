/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.post("/", async (req, res) => {
  const {
    login, email, password, location,
  } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    const existUser = await User.findOne({ where: { login } });
    if (existUser) {
      res.redirect("/register");
    } else {
      const newUser = await User.create({
        login,
        email,
        password: hashPass,
        location,
      });
      req.session.user = {
        login: newUser.login,
        id: newUser.id,
        location: newUser.location,
        email: newUser.email,
      };
      // console.log(req.session.user);
      res.redirect("/next");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;