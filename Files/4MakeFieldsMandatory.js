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

var teacher5 = new TeacherModel({
  name: "Ravi",
  age: 25,
  experience: 4,
  email: "ravi@gmail.com",
});

var teacher6 = new TeacherModel({
  name: "Vamshi",
  age: 22,
  experience: 7,
  email: "vamshi@gmail.com",
});

//! Insert Single Document
teacher7.save((err, res) => {
  if (err) console.log(err);
  console.log(res);
});

//! Insert Multiple Documents
TeacherModel.insertMany([teacher4, teacher5, teacher6], (err, res) => {
  if (err) console.log(err);
  console.log(res);
});
