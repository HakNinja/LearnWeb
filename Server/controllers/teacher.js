import Teacher from "../models/Teacher.js"




export const addTeacher = async (req, res) => {
    try {
      // console.log("hitted")
     const A = req.body
     const B = await Teacher.create(A)
     await B.save()
      res.status(200).json({ "success": true});
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }


  export const Login = async (req, res) => {
    try {
      
     const {email,password} = req.body
     const B = await Teacher.findOne({"email": email})
     if(!B){
      res.status(200).json({ message: "User not exist" });
     }
    else if(password===B.password){
      res.status(200).json({ "success": true,"user":B});
     }
     else{
      res.status(200).json({ message: "User name or password not match" });
     }
    } catch (error) {
      res.status(404).json({ message: 'User name or password not match' });
    }
  }

