const Patient = require("../models/Patient");
const Results = require("../models/Results");

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
  const theData = { loggedIn: true }; //>>> Remove once security is set
  res.render("tech-main", theData);
});

router.get("/results", (req, res) => {
  Results.findAll({
    attributes: ["patient_id", "run_id", "clade"],
    order: [["id"]],
    include: [
      {
        model: Patient,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbResultsData) => {
      const results = dbResultsData.map((results) =>
        results.get({ plain: true })
      );
      console.log;
      res.render("results", {
        results,
        loggedIn: true, //>>> Remove once security is set
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/patients", (req, res) => {
  Patient.findAll({
    attributes: ["id", "first_name", "last_name", "dob"],
    order: [["last_name", "DESC"]],
    include: [
      {
        model: Results,
        attributes: ["clade"],
      },
    ],
  })
    .then((dbPatientData) => {
      const patients = dbPatientData.map((patients) =>
        patients.get({ plain: true })
      );
      console.log;
      res.render("patients", {
        patients,
        loggedIn: true, //>>> Remove once security is set
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
