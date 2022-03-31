const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/school";

mongoose.connect(dbUrl, (err, suc) => {
  if (err) console.log(err);
  console.log("Connected Sucessfully...");
});
