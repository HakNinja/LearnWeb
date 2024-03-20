import express from "express";
import {
  addUser,
  Login,
  updateUser,
  getUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/adduser", addUser);
router.post("/updateUser",updateUser)
router.post('/getUser',getUser)
router.post("/login", Login);


export default router;