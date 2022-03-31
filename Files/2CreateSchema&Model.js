const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/school";

mongoose.connect(dbUrl, (err, suc) => {
  if (err) console.log(err);
  console.log("Connected Sucessfully...");
});

//! Step-1
//! Creating Schema

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const teacherSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  experience: Number,
});

//! Step-2
//! Creating a model / Collection using this Schema.

const StudentModel = mongoose.model("students", studentSchema);
const TeacherModel = mongoose.model("teachers", teacherSchema);
