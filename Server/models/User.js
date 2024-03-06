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

const User = mongoose.model("User", UserSchema);
export default User;