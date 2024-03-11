import User from "../models/User.js"




export const addUser = async (req, res) => {
    try {
      // console.log("hitted")
     const A = req.body
     const B = await User.create(A)
     await B.save()
      res.status(200).json({ "success": true });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }


  export const Login = async (req, res) => {
    try {
      
     const {email,password} = req.body
     const B = await User.findOne({"email": email})
     if(password===B.password){
      res.status(200).json({ "success": true, "user":B });
     }
     else{
      res.status(200).json({ message: "User name or password not match" });
     }
      
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

