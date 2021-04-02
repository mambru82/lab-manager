const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  /*>>> un-comment this once security is ready
  if (req.session.loggedIn) {
    res.redirect("/tech-main");
    return;
  }
  >>>*/
  res.render("login");
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('homepage');
  });

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/tech-main", (req, res) => {
  res.render("tech-main");
});

module.exports = router;

