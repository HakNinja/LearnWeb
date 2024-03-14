import express from "express";
import {
  addUser,
  Login,
  updateUser
} from "../controllers/user.js";

const router = express.Router();

router.post("/adduser", addUser);
router.put("updateUser",updateUser)
router.post("/login", Login);


export default router;