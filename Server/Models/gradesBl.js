const grades = require('./studentModel');


//get by id
const getAllGrades = (id) =>{
    return new Promise((resolve)=>{
        grades.findById(id,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                resolve(data.Grades);
            }
        })
    })
}
// add grade
const addGrade = (id,grade) =>{
    return new Promise((resolve)=>{
        grades.findById(id,(err,data)=>{
            if(err){console.log(err)}
           else{let newGrade = {date:grade.date,grade:grade.grade};
               if(data.Grades == null){data.Grades = [newGrade];}
               else{{data.Grades.push(newGrade);}}
         data.save(err=>{
             if(err){console.log(err)};
           { resolve("Grade Added")}
         })
                       
     }})})
}

//update grade 
const updateGrade = (id,updatedGrades) =>{
    return new Promise ((resolve)=>{
        grades.findByIdAndUpdate(id,{
           Grades : updatedGrades
        },err=>{
            if(err){console.log(err)}
            else{
                resolve("Grades updated")
            }
        })
    })

}


module.exports = {getAllGrades,addGrade,updateGrade};