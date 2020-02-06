const mongoose = require('mongoose');
const express = require('express');
router = express.Router();


const StudentSchema = require('../models/Student');


router.get('/', (req, res) => {

    res.status(200).json({
        message: "You are home",
        options: `go to the http://localhost:${port}/find/all to see all graduates`
    });

});

// find graduate by id
router.get('/find/graduateid/:id', (req, res) => {



});

//all the post in the database
router.get('/find/all', async (req, res) => {

    try {
        allGrads = await StudentSchema.find();
        res.status(200).json(allGrads);
    } catch (err) { res.status(500).json({ message: err }); }

});

module.exports = router;