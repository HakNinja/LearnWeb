import express from "express";
import {
  addTeacher,
  Login
} from "../controllers/user.js";

const router = express.Router();

router.post("/adduser", addTeacher);
router.post("/login", Login);


export default router;