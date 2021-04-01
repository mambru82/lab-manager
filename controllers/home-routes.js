const Patient = require("../models/Patient");

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

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/tech-main", (req, res) => {
  Patient.findAll({
    attributes:[
      'id',
      'first_name',
      'last_name',
      'dob'
    ]
  }).then(dbPatientData => {
      const patients = dbPatientData.map(patients => patients.get({ plain: true }));

      res.render('tech-main', {
        patients,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
 // res.render("tech-main", {loggedIn:true});
//});

module.exports = router;

