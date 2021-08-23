const Student = require('./studentModel');


///get all
const getAllStudents = () => {
    return new Promise((resolve)=>{
        Student.find({},(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                resolve(data);
            }
        })
    })
}


//get by id
const getStudentById = (id)=>{
    return new Promise((resolve)=>{
        Student.findById(id,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//post student
const addStudent = (newStudent) =>{
    return new Promise((resolve)=>{
        let studentToCreate = new Student ({
            fullName: newStudent.fullName,
            Email: newStudent.Email,
            faculty: newStudent.faculty,
            BirthDate: newStudent.BirthDate,
            Grades:[]
        });
        studentToCreate.save((err)=>{
            if(err){console.log(err);}
            else{
                resolve(studentToCreate);
            }
        })
    })
}

//update student
const updateStudent = (studentId,studentToUpdate)=>{
    return new Promise((resolve)=>{
        
        Student.findByIdAndUpdate(studentId,{
            fullName: studentToUpdate.fullName,
            Email:studentToUpdate.Email,
            faculty:studentToUpdate.faculty,
            BirthDate:studentToUpdate.BirthDate

        },err=>{
            if(err){console.log(err);}
            else{resolve("Student updated");}
        });
    })}

// delete student
const deleteStudent = (studentId) =>{
    return new Promise((resolve)=>{
        Student.findByIdAndDelete(studentId,err=>{
            if(err){
                console.log(err);
            }
            else{
                resolve("Student deleted");
            }
        })
    })
}

module.exports = {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent};