const {Assay} = require('../models');

const assayData = [
    {
        assay_name: "COVIDSeq",
        analyte: ["SARS-CoV2"]
    }
];

const seedAssay = () => Assay.bulkCreate(assayData);

module.exports = seedAssay;