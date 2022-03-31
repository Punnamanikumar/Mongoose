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

var student2 = new StudentModel({
  name: "b",
  age: 25,
  email: "xyz@gmail.com",
});

var student3 = new StudentModel({
  name: "c",
  age: 21,
  email: "pqr@gmail.com",
});

StudentModel.insertMany([student2, student3], (err, result) => {
  if (err) console.log(err);
  console.log(result);
});
