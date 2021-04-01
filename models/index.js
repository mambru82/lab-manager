const Patient = require('./Patient');
const Assay = require('./Assay');
const Tech = require('./Tech');
const Run = require('./Run');
const Results = require('./Results');

Run.belongsTo(Tech, {
    foreignKey: 'tech_id'
});

Run.belongsTo(Assay, {
    foreignKey: 'assay_id'
});

Tech.hasMany(Run, {
    foreignKey: 'run_id'
});

Tech.hasMany(Results, {
    foreignKeyKey: 'run_id'
});

Patient.hasOne(Tech, {
    foreignKey: 'tech_id'
});

Patient.hasMany(Results, {
    foreignKey: 'result_id'
});

Results.belongsTo(Patient, {
    foreignKey: 'patient_id'
});

Assay.hasMany(Run, {
    foreignKey: 'run_id'
});

module.exports = { Patient, Assay, Tech, Run, Results };