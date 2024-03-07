 import {pinData} from "../pincodes.js"
 
 
 export const pincodeDataAutomation = async (req, res) => {
    try {
    //  console.log(pinData)
     const A = req.query.pincode
     console.log(A)
    const B = pinData.filter((pin)=>{
       return pin.pincode==A
    })
    // console.log(Object.keys(B[0]).length)
    if(Object.keys(B[0]).length < 5){
      res.status(200).json({message:"Pincode not found try again with different pincode"})
    }else{
     const C = B[0]
     C.Success=true
          
      res.status(200).json({ "Response": C });

    }
   
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

      //     .then((response) => response.json())
        //     .then((data) => console.log(data.Response.Success))