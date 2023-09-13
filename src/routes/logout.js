const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      res.clearCookie('User');
      res.redirect('/');
    }
  });
});

module.exports = router;
