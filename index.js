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

// const teacherSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   experience: Number,
// });

//! Step-2
//! Creating a model / Collection using this Schema.

const StudentModel = mongoose.model("students", studentSchema);
// const TeacherModel = mongoose.model("teachers", teacherSchema);

//! We need to create the documents according to schema.

//! Insert Single Document
// var student1 = new StudentModel({
//   name: "a",
//   age: 21,
//   email: "abc@gmai.com",
// });

// student1.save((err, result) => {
//   if (err) console.log(err);
//   console.log(result);
// });

//! Step-3
//! Insert Many Documents.

// var student2 = new StudentModel({
//   name: "b",
//   age: 25,
//   email: "xyz@gmail.com",
// });

// var student3 = new StudentModel({
//   name: "c",
//   age: 21,
//   email: "pqr@gmail.com",
// });

// StudentModel.insertMany([student2, student3], (err, result) => {
//   if (err) console.log(err);
//   console.log(result);
// });

//! Step-4
//! To Make fields Mandatory  in schema (required:true)

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18, //! Minimum Value
    max: 30, //! Maximum Value
  },
  experience: Number,
});

const TeacherModel = mongoose.model("teachers", teacherSchema);

var teacher4 = new TeacherModel({
  name: "Mani",
  age: 15,
  experience: 5,
  email: "mani@gmail.com",
});

// var teacher5 = new TeacherModel({
//   name: "Ravi",
//   age: 25,
//   experience: 4,
//   email: "ravi@gmail.com",
// });

// var teacher6 = new TeacherModel({
//   name: "Vamshi",
//   age: 22,
//   experience: 7,
//   email: "vamshi@gmail.com",
// });

//! Insert Single Document
teacher4.save((err, res) => {
  if (err) console.log(err);
  console.log(res);
});

//! Insert Multiple Documents
// TeacherModel.insertMany([teacher4, teacher5, teacher6], (err, res) => {
//   if (err) console.log(err);
//   console.log(res);
// });

//! Step-5
//! Querying the Database using Mongoose

// TeacherModel.find({ experience: { $gt: 5 } }, (err, res) => {
//   if (err) console.log(err);
//   console.log("Found Data Sucessfully...");
//   console.log(res);
// });

//! Step-6
//! Updating the Document

// TeacherModel.updateOne(
//   { name: "Z" },
//   { $set: { name: "Venkat" } },
//   (err, res) => {
//     if (err) console.log(err);
//     console.log("Document Updated Sucessfully...");
//     console.log(res);
//   }
// );

//! Step-7
//! Deleting the Document

TeacherModel.deleteOne({ name: "Venkat" }, (err, res) => {
  if (err) console.log(err);
  console.log("Document Deleted SUcessfully...");
  console.log(res);
});
