import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {  name: {
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    min: 5,
  },
  city: String,
  state: String,
  country: String,
  phoneNumber: String,
  instituteName:{
    type: String,
    min: 2
  },
  role:{
    type:String,
    default:1
  }
},
{ timestamps: true }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;