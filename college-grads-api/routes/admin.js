const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

      
const StudentSchema = require('../models/Student');


const optionsMessage =  {
            message: "Use the following to add, update, or view graduate information.",
            POST: "route to use: admin/post",
            GET: "route to use: admin/getall or admin/getid/:id",
            DELETE: "route to use: admin/delete/:id",
            PATCH: "route to use: admin/patch/id"
        };


    router.get('/', (req, res) => {

        res.status(200).json(optionsMessage);
        
      })

      // Post student
      
      router.post('/post', validateStudent, async (req, res) => {

            try {

                const newPostSaved = await req.newpost.save()
                res.status(200).json({newpost: newPostSaved})

            } catch (err) {

                res.status(500).json({"message": err.message})

            }

      })

      
        //Delete Post 

        router.get('/delete/:id', get_by_id, (req, res) => {

            const id = req.searched_document._id;

            console.log(id);

            res.send('testing')
            

            // deleteReport = await StudentSchema.deleteOne({_id: })
        })


      // Get  all students

      router.get('/getall', async (req, res) => {

        const allDocuments = await StudentSchema.find();

        console.log('Docs', allDocuments);

        res.json({allDocuments});
          
      })

      //Get one student

      router.get('/getid/:id', get_by_id, (req, res) => {
          res.json({Found_Post: req.searched_document})
      })

function validateStudent(req, res, next) {

    console.log(req.body);
    
    const newGraduate = StudentSchema({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gradYear: req.body.gradYear,
        gradMonth: req.body.gradMonth,
        jobTitle: req.body.job_Title,
        companyName: req.body.company_Name,
        keySkills: req.body.key_Skills,
        gitHub: req.body.gitHub,
        linkedIn: req.body.linkedIn,
        twitter: req.body.twitter

    })

    req.newpost = newGraduate;

    next()

}


async function get_by_id(req, res, next) {

    try {
        const searchedDoc = await StudentSchema.findById(req.params.id);
        req.searched_document = searchedDoc; 
        next()     
    } catch (err) {

        let statusCode = 404;

        if ( err.message.substring(0,4) == 'Cast') {

           err.message = 'ID is not in the correct format';

           statusCode = 400;

        }

        res.status(statusCode).json({
            message: 'Invalid Id',
            error: err.message
        })
        
    }

}

    module.exports = router;