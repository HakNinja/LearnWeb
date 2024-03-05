import User from "../models/User.js"




export const addUser = async (req, res) => {
    try {
      // console.log("hitted")
     const A = req.body
     const B = await User.create(A)
     await B.save()
      res.status(200).json({a:B});
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }