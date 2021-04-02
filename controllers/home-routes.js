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

      console.log(results);
      //results.push(createObjectWithDataAnalysis(results));
      var chartdata = createObjectWithDataAnalysis(results);

      res.render("results", {
        results,
        chartdata
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




function createObjectWithDataAnalysis(results) {
  var rtnObject = {};
  var len = results.length;

  
  // Get list of all clades
  var arrAllRuns = [];
  for (var i = 0; i < len; i++) {
    arrAllRuns.push(results[i].run_id);
  }
  // Get total unique runs
  var distinctRuns = arrAllRuns.filter((v, i, a) => a.indexOf(v) === i);
  
 
  // Get list of all clades
  var arrAllClades = [];
  for (var i = 0; i < len; i++) {
    arrAllClades.push(results[i].clade);
  }

  //Get list of unique clades
  var distinctClades = arrAllClades.filter((v, i, a) => a.indexOf(v) === i);
  var cladesAndCountPairs = [];

  for (var i = 0; i < distinctClades.length; i++) {
    var count = arrAllClades.reduce(function (n, val) {
      return n + (val === distinctClades[i]);
    }, 0);
    var tmpArr = [];
    tmpArr.push(distinctClades[i]);
    tmpArr.push(count);
    cladesAndCountPairs.push(tmpArr);
  }

  rtnObject = {
    total_count: len,
    distinct_clades: distinctClades,
    distinct_clades_count: distinctClades.length,
    clade_count_pairs: cladesAndCountPairs,
    distinct_runs: distinctRuns,
    distinct_runs_count: distinctRuns.length,
  };
  return rtnObject;

}

module.exports = router;
