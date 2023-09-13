/* eslint-disable quotes */
require("@babel/register");
require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);


const routerRegister = require('./routes/register');
const routerLogin = require('./routes/login');
const routerMain = require('./routes/main');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
const sessionConfig = {
  name: "User",
  store: new FileStore(),
  secret: "Секретное слово",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use('/register', routerRegister);
app.use('/login', routerLogin);
app.use('/', routerMain);


app.listen(PORT, () => {
  console.log(`Server starting on PORT === ${PORT}`);
});

// app.use("*", (req, res) => {
//   req?.session.user ? res.redirect("/decks") : res.redirect("/home");
// });
