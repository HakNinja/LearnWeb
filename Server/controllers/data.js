 import {pinData} from "../pincodes.js"
 
 
 export const pincodeDataAutomation = async (req, res) => {
    try {
     console.log(pinData)
     const A = req.body.pincode
    //  const B = await User.create(A)
    const B = pinData.filter((pin)=>{
       return pin.pincode==A
    })
    console.log(B)
    //  await B.save()
      res.status(200).json({ "success": B[0] });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }