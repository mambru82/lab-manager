const Patient = require('./Patient');
const Assay = require('./Assay');
const Tech = require('./Tech');
const Run = require('./Run');
const Results = require('./Results');
const AssayTech = require('./AssayTech')

Run.belongsTo(Tech, {
    foreignKey: 'tech_id'
});

Run.belongsTo(Assay, {
    foreignKey: 'assay_id'
});

Tech.hasMany(Run, {
    foreignKey: 'tech_id'
});

Assay.belongsToMany(Tech, {
    through: AssayTech,
    as: 'assay_techs',
    foreignKey: 'tech_id'
});

Tech.belongsToMany(Assay, {
    through: AssayTech,
    as: 'assay_techs',
    foreignKey: 'assay_id'
})



// Tech.hasMany(Results, {
//     foreignKeyKey: 'run_id'
// });

// Patient.hasOne(Tech, {
//     foreignKey: 'tech_id'
// });

Patient.hasMany(Results, {
    foreignKey: 'patient_id'
});

Results.belongsTo(Patient, {
    foreignKey: 'patient_id'
});

Assay.hasMany(Run, {
    foreignKey: 'run_id'
});

Results.belongsTo(Run, {
    foreignKey: 'run_id'
})

Run.hasMany(Results, {
    foreignKey: 'run_id'
})

module.exports = { Patient, Assay, Tech, Run, Results, AssayTech };
