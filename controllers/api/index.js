const router = require('express').Router();
const patientRoutes = require('./patient-routes');
const resultsRoutes = require('./results-routes');
const runRoutes = require('./run-routes');
const techRoutes = require('./tech-routes')

router.use('/patient', patientRoutes);
// router.use('/results', resultsRoutes);
// router.use('/run', runRoutes);

module.exports = router;