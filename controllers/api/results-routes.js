const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Assay, Patient, Results, Run, Tech } = require('../../models')

//pull a patient list for all patients
router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    Results.findAll({

        order: [['id']],
        include: [
            {
                model: Patient,
                attributes: ['first_name', 'last_name']
            }
        ]
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })

})
router.get('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    Results.findOne({
        order: [['id']],
        include: [
            {
                model: Patient,
                attributes: ['first_name', 'last_name']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbTechData => {
        if (!dbTechData) {
            res.status(404).json({ message: 'No tech found with this id'});
            return;
        }
        res.json(dbTechData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
router.post('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../login');
  }
    console.log(req);
    Results.create({
        patient_id: req.body.patient_id,
        run_id: req.body.run_id,
        seq_name: req.body.seqName,
        clade: req.body.clade,
        qc_missing_data_score: req.body.qc.missingData.score,
        total_missing: req.body.qc.missingData.totalMissing,
        missing_data_threshold: req.body.qc.missingData.missingDataThreshold,
        status: req.body.qc.missingData.status,
        overall_score: req.body.qc.overallScore,
        overall_status: req.body.qc.overallStatus,
        nearest_tree_node_id: req.body.nearestTreeNodeId,
        errors: req.body.errors[0]
    })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.post("/accession", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
  console.log(req);
  Results.create({
    patient_id: req.body.patient_id,
    run_id: req.body.run_id,
    seq_name: req.body.seq_name,
    clade: req.body.clade,
    qc_missing_data_score: req.body.qc_missing_data_score,
    total_missing: req.body.total_missing,
    missing_data_threshold: req.body.missing_data_threshold,
    status: req.body.status,
    overall_score: req.body.overall_score,
    overall_status: req.body.overall_status,
    nearest_tree_node_id: req.body.nearest_tree_node_id,
    errors: req.body.errors,
  })
    .then((dbPatientData) => res.json(dbPatientData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


    
router.put('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    //expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234' }

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Results.update({
        result_date: sequelize.literal('CURRENT_TIMESTAMP'),
        seq_name: req.body.seqName,
        clade: req.body.clade,
        qc_missing_data_score: (req.body.qc)?req.body.qc.missingData.score:null,
        total_missing: (req.body.qc)?req.body.qc.missingData.totalMissing:null,
        missing_data_threshold: (req.body.qc)?req.body.qc.missingData.missingDataThreshold:null,
        status: (req.body.qc)?req.body.qc.missingData.status:null,
        overall_score: (req.body.qc)?req.body.qc.overallScore:null,
        overall_status: (req.body.qc)?req.body.qc.overallStatus:null,
        nearest_tree_node_id: req.body.nearestTreeNodeId,
        errors: req.body.errors[0]
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(dbResultsData=> {
        if (!dbResultsData[0]) {
            res.status(404).json({ message: 'No result found with this id' });
            return;
        }
        res.json(dbResultsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
router.put('/run_update/:id', (req, res) => {
      if (!req.session.loggedIn) {
        res.redirect('../../login');
      }
        //expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234' }
    
        // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
        Results.update({
            run_id: req.body.run_id
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbResultsData=> {
            if (!dbResultsData[0]) {
                res.status(404).json({ message: 'No result found with this id' });
                return;
            }
            res.json(dbResultsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    });

router.delete('/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('../../login');
  }
    Results.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPatientData => {
        if (!dbPatientData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPatientData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;