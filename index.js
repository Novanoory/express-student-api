let express = require("express")
let app = express()

let students = [
    {
        id : 1,
        name : "Hamza",
        marks : 80
    },
    {
        id : 2,
        name : "Ali", 
        marks : 90      
    },
    {
        id : 3,
        name : "Ahmed",
        marks : 85
    },
    {
        id : 4,
        name : "Sara",
        marks : 95
    },
    {
        id : 5,
        name : "Zainab",
        marks : 88
    },
    {
        id : 6,
        name : "Omar",
        marks : 92
    }
]

//home route
app.get("/", (req, res)=>{
    res.send("Welcome to the Student API")
})
//Students route
app.get("/students", (req, res)=>{
    res.json(students)
})
// Passed  Students route
app.get("/students/passed", (req, res)=>{
    let passedStudents = students.filter((student)=>{
        return student.marks >= 50
    })
    res.json(passedStudents)
})

//Failed Students Route
app.get("/students/failed", (req, res)=>{
    let failedStudents = students.filter((student)=>{
        return student.marks < 50
    })
    res.json(failedStudents)
})

//Topper Students Route
app.get("/students/topper", (req, res)=>{
    let topper = students[0]
    students.forEach((student)=>{
        if(student.marks > topper.marks){
            topper = student
        }   
    })
    res.json(topper)
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
