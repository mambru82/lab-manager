const {Results} = require('../models');

const resultData = [
    {
        "seqName": "2019-nCoV_MN908947|DUMMY1",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
            "score": 0,
            "totalMissing": 0,
            "missingDataThreshold": 3000,
            "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2673,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY2",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
            "score": 0,
            "totalMissing": 0,
            "missingDataThreshold": 3000,
            "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2685,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY3",
        "errors": [
            "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
        ]
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY4",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2673,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY5",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 6.25,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2673,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY6",
        "clade": "20B",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2086,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY7",
        "clade": "20B",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2092,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY8",
        "clade": "20G",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 8.506944444444445,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 1519,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY9",
        "clade": "20G",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 2.777777777777778,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 1569,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY10",
        "clade": "20G",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 1.5625,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 1519,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY11",
        "errors": [
            "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
        ]
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY12",
        "errors": [
            "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
        ]
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY13",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2611,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY14",
        "errors": [
            "Unable to align: too many insertions, deletions, duplications, or ambiguous seed matches"
        ]
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY15",
        "clade": "20I/501Y.V1",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0.17361111111111113,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2685,
        "errors": []
    },
    {
        "seqName": "2019-nCoV_MN908947|DUMMY16",
        "clade": "20B",
        "qc": {
            "missingData": {
                "score": 0,
                "totalMissing": 0,
                "missingDataThreshold": 3000,
                "status": "good"
            },
            "overallScore": 0,
            "overallStatus": "good"
        },
        "nearestTreeNodeId": 2086,
        "errors": []
    }
];

const seedResults = () => Results.bulkCreate(resultData);

module.exports = seedResults;