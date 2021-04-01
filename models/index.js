const Assay = require('./Assay');
const Patient = require('./Patient');
const Results = require('./Results');
const Run = require('./Run');
const Tech = require('./Tech');

//associations
//One tech can have many runs, one run can only have one tech
Tech.hasMany(Run, {
    foreignKey: 'tech_id'
});

Run.belongsTo(Tech, {
    foreignKey: 'tech_id'
})

//One assay can have many runs, one run can only have one assay
Assay.hasMany(Run, {
    foreignKey: 'assay_id'
})

Run.belongsTo(Assay, {
    foreignKey: 'assay_id'
})