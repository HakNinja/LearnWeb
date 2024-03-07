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
    required: true,
    min: 5,
  },
  city: String,
  state: String,
  country: String,
  phoneNumber: String,
  instituteName:{
    type: String,
    required: true,
    min: 2
  }
},
{ timestamps: true }
);

const Teacher = mongoose.model("teacher", TeacherSchema);
export default User;