import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {  name: {
    type: String,
    required: true
  },

  

},
{ timestamps: true }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;