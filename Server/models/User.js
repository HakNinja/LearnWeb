import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
  district: String,
  country: String,
  phoneNumber: String,
  instituteName:{
    type: String,
    min: 2
  },
  role:{
    type:String,
    default:2
  },
  image:{
    type: String
  }
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;