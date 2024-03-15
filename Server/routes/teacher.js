import express from "express";
import {
  addTeacher,
  Login,
  updateTeacher,
  getTeacher
} from "../controllers/teacher.js"

const router = express.Router();

router.post("/addteacher", addTeacher);
router.post("/updateTeacher",updateTeacher)
router.post("/getTeacher", getTeacher)
router.post("/login", Login);


export default router;