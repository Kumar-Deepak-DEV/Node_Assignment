const express = require("express");

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3,
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9,
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1,
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7,
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2,
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8,
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0,
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9,
  },
  {
    id: 11,
    name: "Aditya",
    branch: "CSE",
    semester: 6,
    cgpa: 8.4,
  },
];


app.get("/", (req, res) => {
    res.send("server is working");
})

app.get("/students",(req,res)=>{
    res.status(200).json(students);
})

app.get("/students/topper",(req,res)=>{
    if(students.length==0)res.status(404).json(message="students not found")
    let max=0;
    let ind;
    for(let i=0;i<students.length;i++){
        if(students[i].cgpa>max){
            max=students[i].cgpa;
            ind=i;
        }
    }
    res.status(200).json(students[ind]);
})

app.get("/students/average",(req,res)=>{
  let data=students.reduce((current,next)=>current+next.cgpa,0)
  data/=students.length;
  res.status(200).json({avgCGPA:Number(data.toFixed(2))});
})

app.get("/students/count",(req,res)=>{
  res.status(200).json({totalStudents:students.length});
})

app.get("/students/branch/:branchName",(req,res)=>{
    const uid=String(req.params.branchName).toLowerCase()
    const student = students.filter(u=>u.branch.toLowerCase()===uid)

    if(!student) res.status(404).json({message:"student not found"});

    res.status(200).json(student);
})


app.get("/students/:id",(req,res)=>{
    const uid=Number(req.params.id) 
    const student = students.find(u=>u.id===uid)

    if(!student) res.status(404).json({message:"student not found"});

    res.status(200).json(student);
})


app.listen(3000, () => {
  console.log("Server started on port 3000");
});