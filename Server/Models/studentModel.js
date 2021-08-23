const mongoose = require('mongoose');



let studentSchema = new mongoose.Schema({
    fullName: String,
    Email: String,
    faculty: String,
    BirthDate: Date,
    Grades: [{date:Date,grade:Number}]

});

module.exports = mongoose.model('students',studentSchema);
