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

Tech.belongsTo(Assay, {
    foreignKey: 'assay_id'
});

Patient.hasOne(Tech, {
    foreignKey: 'tech_id'
});

Patient.hasMany(Results, {
    foreignKey: 'result_id'
});

module.exports = { Patient, Assay, Tech, Run, Results };