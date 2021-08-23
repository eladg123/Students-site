const express = require('express');
const studentsBl = require('../Models/studentsBl');


const router = express.Router();

//getAll
router.route('/').get(async(req,resp)=>{
    let data = await studentsBl.getAllStudents();
    return resp.json(data);
})

//getbyid
router.route('/:id').get(async(req,resp)=>{
    let id = req.params.id;
    let data = await studentsBl.getStudentById(id);
    return resp.json(data);
})

//add student
router.route('/').post(async(req,resp)=>{
    let newStudent = req.body;
    let data = await studentsBl.addStudent(newStudent);
    return resp.json(data);
})

//update student
router.route('/:id').put(async(req,resp)=>{
    let id = req.params.id;
    let updatedStudent = req.body;
    let status = await studentsBl.updateStudent(id,updatedStudent);
    return resp.json(status);
})
//delete student
router.route('/:id').delete(async(req,resp)=>{
    let id = req.params.id;
    let status = await studentsBl.deleteStudent(id);
    return resp.json(status);
})


module.exports = router;