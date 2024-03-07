import express from "express";
import {
  addTeacher,
  Login
} from "../controllers/teacher.js"

const router = express.Router();

router.post("/addteacher", addTeacher);
router.post("/login", Login);


export default router;