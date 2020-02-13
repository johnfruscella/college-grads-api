const mongoose = require('mongoose')


const studentSchema = mongoose.Schema({

        firstName: {type: String, required: true},

        lastName: {type: String, required: true},

        gradYear: {type: String, required: true},
        gradMonth: {type: String, required: true},

        jobTitle: {type: String, required: true},

        companyName: {type: String, required: true},

        keySkills: {type: [String], required: true},

        gitHub: {type: String, required: true},

        linkedIn: {type: String, required: true},

        twitter: {type: String, required: true},

        linkedInPic: {type: String, required: true}

    });



module.exports = mongoose.model('student', studentSchema);