//! Step-5
//! Querying the Database using Mongoose

TeacherModel.find({ experience: { $gt: 5 } }, (err, res) => {
  if (err) console.log(err);
  console.log("Found Data Sucessfully...");
  console.log(res);
});
