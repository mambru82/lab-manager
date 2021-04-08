const router = require('express').Router();
const patientRoutes = require('./patient-routes');
const resultsRoutes = require('./results-routes');
const runRoutes = require('./run-routes');
const techRoutes = require('./tech-routes')
const assayRoutes = require('./assay-routes')

router.use('/patient', patientRoutes);
router.use('/results', resultsRoutes);
router.use('/run', runRoutes);
router.use('/techs', techRoutes);
router.use('/assays', assayRoutes)

module.exports = router;