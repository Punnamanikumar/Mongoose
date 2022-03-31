//! Step-6
//! Updating the Document

TeacherModel.updateOne(
  { name: "Z" },
  { $set: { name: "Venkat" } },
  (err, res) => {
    if (err) console.log(err);
    console.log("Document Updated Sucessfully...");
    console.log(res);
  }
);
