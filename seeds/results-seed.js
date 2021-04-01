const {Results} = require('../models');

const resultData = [
    {
        "patient_id": 1,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947_DUMMY1",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score": 0,
        "total_missing": 0,
        "missing_data_threshold": 3000,
        "status": "good",
        "overall_score": 0,
        "overall_status": "good",
        "nearest_tree_node_id": 2673,
        "errors": ""
    },
    {
        "patient_id": 2,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947_DUMMY2",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missing_data_threshold": 3000,
        "status": "good",
        "overall_score": 0,
        "overall_status": "good",
        "nearest_tree_node_id": 2685,
        "errors": ""
    },
    {
        "patient_id": 3,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947_DUMMY3",
        "errors": "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
    },
    {
        "patient_id": 4,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY4",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0,
        "overallStatus": "good",
        "nearestTreeNodeId": 2673,
        "errors": ''
    },
    {
        "patient_id": 5,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY5",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 6.25,
        "overallStatus": "good",
        "nearestTreeNodeId": 2673,
        "errors": ''
    },
    {
        "patient_id": 6,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY6",
        "clade": "20B",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0,
        "overallStatus": "good",
        "nearestTreeNodeId": 2086,
        "errors": ''
    },
    {
        "patient_id": 7,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY7",
        "clade": "20B",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0,
        "overallStatus": "good",
        "nearestTreeNodeId": 2092,
        "errors": ''
    },
    {
        "patient_id": 8,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY8",
        "clade": "20G",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 8.506944444444445,
        "overallStatus": "good",
        "nearestTreeNodeId": 1519,
        "errors": ''
    },
    {
        "patient_id": 9,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY9",
        "clade": "20G",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 2.777777777777778,
        "overallStatus": "good",
        "nearestTreeNodeId": 1569,
        "errors": ''
    },
    {
        "patient_id": 10,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY10",
        "clade": "20G",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 1.5625,
        "overallStatus": "good",
        "nearestTreeNodeId": 1519,
        "errors": ''
    },
    {
        "patient_id": 11,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY11",
        "errors": "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
    },
    {
        "patient_id": 12,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY12",
        "errors": "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
    },
    {
        "patient_id": 13,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY13",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0,
        "overallStatus": "good",
        "nearestTreeNodeId": 2611,
        "errors": ''
    },
    {
        "patient_id": 14,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY14",
        "errors": "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
    },
    {
        "patient_id": 15,
        "run_id": 1,
        "seq_name": "2019-nCoV_MN908947|DUMMY15",
        "clade": "20I/501Y.V1",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0.17361111111111113,
        "overallStatus": "good",
        "nearestTreeNodeId": 2685,
        "errors": ''
    },
    {
        "patient_id": 16,
        "run_id": 2,
        "seq_name": "2019-nCoV_MN908947|DUMMY16",
        "clade": "20B",
        "qc_missing_data_score":0,
        "total_missing": 0,
        "missingDataThreshold": 3000,
        "status": "good",
        "overallScore": 0,
        "overallStatus": "good",
        "nearestTreeNodeId": 2086,
        "errors": ''
    }
];

const seedResults = () => Results.bulkCreate(resultData);

module.exports = seedResults;