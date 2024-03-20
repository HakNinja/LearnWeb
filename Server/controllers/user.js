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


  export const updateUser = async (req, res) => {
    try {
      const {name, email, phoneNumber, pincode, city, stateName, district, country, address, instituteName} = req.body
      // console.log(image)
      const filter = { email: email };
      const update = {name:name,phoneNumber: phoneNumber, pincode: pincode, city: city, stateName: stateName, district: district, country: country, address: address, instituteName: instituteName };
      

      const doc = await User.findOneAndUpdate(filter, update, {
        new: true
      });
   
      res.status(200).json({  "success": true, "user": doc});
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  export const getUser = async (req, res) => {
    try {
      
     const {email, role} = req.body
     const B = await User.findOne({"email": email})
    //  console.log(B)
  
   
      res.status(200).json({ "success": true, "user":B});
     
   
    } catch (error) {
      res.status(404).json({ message: 'User name or password not match' });
    }
  }


  export const Login = async (req, res) => {
    try {
      
     const {email,password} = req.body
     const B = await User.findOne({"email": email})
     if(!B){
      res.status(200).json({ message: "User not exist" });
     }
    else if(password===B.password){
      console.log("hii")
      res.cookie('userID', B.id, { httpOnly: true });
      res.status(200).json({ "success": true, "user":B });
     }
     else{
      res.status(200).json({ message: "User name or password not match" });
     }
      
    } catch (error) {
      res.status(404).json({ message: 'User name or password not match' });
    }
  }

