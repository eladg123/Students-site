const express = require('express');
const cors = require('cors')
const studentController = require('./controllers/studentController');
const gradeController = require('./controllers/gradesController');
require('./configs/database');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/grades',gradeController)
app.use('/api/students',studentController);
app.listen(8000,console.log("The server is running"));