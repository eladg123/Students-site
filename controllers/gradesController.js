const express = require('express');
const gradesBl = require ('../Models/gradesBl');


const router = express.Router();


//get by id of student

router.route('/:id').get(async(req,resp)=>{
    let id = req.params.id;
    let data = await gradesBl.getAllGrades(id);
    return resp.json(data);
})

//add 
router.route('/:id').post(async(req,resp)=>{
    let id = req.params.id;
    let newGrade = req.body;
    let status = await gradesBl.addGrade(id,newGrade);
    return resp.json(status);
    
})

// update grades
router.route('/:id').put(async(req,resp)=>{
    let id = req.params.id;
    let updatedGrades = req.body;
    let status = await gradesBl.updateGrade(id,updatedGrades);
    return resp.json(status);
})

module.exports = router;