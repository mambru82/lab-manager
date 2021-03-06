const router = require("express").Router();
const { Patient, Results, Tech, Run, Assay, AssayTech } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// renders the Chart summary for all results

router.get("/results", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
  }
  const Op = require("sequelize").Op;
  Results.findAll({
    attributes: ["patient_id", "run_id", "clade", "errors"],
    order: [["id"]],
    where: {
      run_id: { [Op.ne]: null },
    },
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
      var chartdata = resultsDataAnalysis(results);

      res.render("results", {
        results,
        chartdata,
        loggedIn: req.session.loggedIn,
        resultspage: 1,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Renders the patient list

router.get("/patients", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  console.log(req.query);
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

      res.render("patients", {
        patients,
        loggedIn: req.session.loggedIn,
        patientspage: 1,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Renders each individual patient
router.get("/patients/:id", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("../login");
    return;
  }
  Results.findAll({
    attributes: [
      "patient_id",
      "run_id",
      "seq_name",
      "clade",
      "status",
      "overall_score",
      "overall_status",
      "errors",
    ],
    order: [["id"]],
    where: {
      patient_id: req.params.id,
    },
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
      res.render("patients", {
        results,
        viewingPatientResults: true,
        loggedIn: req.session.loggedIn,
        patientspage: 1,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Renders an individual result (for result entry)
router.get("/results/:id", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("../login");
    return;
  }
  Results.findAll({
    attributes: ["id", "patient_id", "seq_name", "accession_date"],
    order: [["id"]],
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Patient,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbResultsData) => {
      results = dbResultsData.map((results) => results.get({ plain: true }));
      Run.findAll({}).then((dbRunData) => {
        rundata = dbRunData.map((rundata) => rundata.get({ plain: true }));
        res.render("submit-results", {
          results,
          rundata,
          viewingPatientResults: true,
          loggedIn: req.session.loggedIn,
          resultspage: 1,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Renders the run metrics chart
router.get("/run-metrics", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  const Op = require("sequelize").Op;
  Results.findAll({
    attributes: ["patient_id", "run_id", "clade", "errors"],
    order: [["id"]],
    where: {
      run_id: { [Op.ne]: null },
    },
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
      var chartdata = resultsDataAnalysis(results);

      res.render("run-metrics", {
        results,
        chartdata,
        loggedIn: req.session.loggedIn,
        runmetrics: 1,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Renders the start run
router.get("/start-run", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  Tech.findAll({
    attributes: ["id", "first_name", "last_name", "assay_id"],
    order: ["last_name"],
  })
    .then((dbTechData) => {
      const techs = dbTechData.map((techs) => techs.get({ plain: true }));
      Assay.findAll({
        attributes: ["id", "assay_name", "analyte"],
        order: ["id"],
      }).then((dbAssayData) => {
        const assays = dbAssayData.map((assays) => assays.get({ plain: true }));
        res.render("start-run", {
          techs,
          assays,
          loggedIn: req.session.loggedIn,
          notification: req.query.notification,
          startrunpage: 1,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Renders the accession case screen
router.get("/accession-case", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  Patient.findAll({
    attributes: ["id", "first_name", "last_name", "dob"],
    order: [["last_name", "DESC"]],
  })
    .then((dbPatientData) => {
      const patients = dbPatientData.map((patients) =>
        patients.get({ plain: true })
      );

      res.render("accession-case", {
        patients,
        loggedIn: req.session.loggedIn,
        notification: req.query.notification,
        accessioncasepage: 1,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/enter-results", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  const Op = require("sequelize").Op;
  Results.findAll({
    attributes: [
      "id",
      "clade",
      "accession_date",
      "result_date",
      "run_id",
      "seq_name",
    ],
    order: [["accession_date"]],
    where: {
      result_date: { [Op.eq]: null },
    },
    include: [
      {
        model: Patient,
        attributes: ["id", "first_name", "last_name"],
      },
    ],
  })
    .then((dbResultsData) => {
      const results = dbResultsData.map((results) =>
        results.get({ plain: true })
      );

      res.render("enter-results", {
        results,
        loggedIn: req.session.loggedIn,
        notification: req.query.notification,
        enterresultspage:1, 
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create-patient", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("login");
    return;
  }
  res.render("create-patient", {
    notification: req.query.notification,
    loggedIn: req.session.loggedIn,
    createpatientpage:1 ,
  });
});

//==================================================
// [Martha] Function to do ananlysis on the resutls
// data. Resulting analysis is returned as an object
//==================================================
function resultsDataAnalysis(results) {
  var rtnObject = {};
  var len = results.length;

  // Get individual arrays of runs and clades
  var arrAllRunIds = [];
  var arrAllClades = [];
  for (var i = 0; i < len; i++) {
    arrAllRunIds.push(results[i].run_id);
    arrAllClades.push(results[i].clade);
  }

  // Get total distinct runs
  var distinctRunIds = arrAllRunIds.filter((v, i, a) => a.indexOf(v) === i);
  //Get list of distinct clades
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

  var errorRatesArray = [];
  for (var i = 0; i < distinctRunIds.length; i++) {
    var count = arrAllRunIds.reduce(function (n, val) {
      return n + (val === distinctRunIds[i]);
    }, 0);

    var errorCount = 0;
    for (var rId = 0; rId < len; rId++) {
      if (results[rId].run_id == distinctRunIds[i] && results[rId].errors) {
        errorCount++;
      }
    }

    var tmpArr = [];
    tmpArr.push(distinctRunIds[i]);
    tmpArr.push(errorCount);
    tmpArr.push(errorCount / count);
    tmpArr.push(count);
    errorRatesArray.push(tmpArr);
  }

  rtnObject = {
    total_count: len,
    distinct_clades: distinctClades,
    distinct_clades_count: distinctClades.length,
    clade_count_pairs: cladesAndCountPairs,
    distinct_runs: distinctRunIds,
    distinct_runs_count: distinctRunIds.length,
    error_rates: errorRatesArray,
  };
  return rtnObject;
}

module.exports = router;
