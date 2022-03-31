//! Step-7
//! Deleting the Document

TeacherModel.deleteOne({ name: "Venkat" }, (err, res) => {
  if (err) console.log(err);
  console.log("Document Deleted SUcessfully...");
  console.log(res);
});
