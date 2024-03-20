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

  export const updateTeacher = async (req, res) => {
    try {
        console.log()
      const {name, email, phoneNumber, pincode, city, stateName, district, country, address, instituteName, } = req.body
      // console.log(image)
      const filter = { email: email };
      const update = {name:name, phoneNumber: phoneNumber, pincode: pincode, city: city, stateName: stateName, district: district, country: country, address: address, instituteName: instituteName };
      

      const doc = await Teacher.findOneAndUpdate(filter, update, {
        new: true
      });
   
      res.status(200).json({  "success": true, "user":doc });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  export const getTeacher = async (req, res) => {
    try {
      
     const {email, role} = req.body
    //  const e = JSON.parse(email)
    // console.log(email)
    //  console.log(e)
     const B = await Teacher.findOne({'email':email})
    //  console.log(B)
  
   
      res.status(200).json({ "success": true, "user":B});
     
   
    } catch (error) {
      res.status(404).json({ message: 'User name or password not match' });
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

