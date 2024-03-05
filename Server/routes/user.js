import express from "express";
import {
  addUser,
  Login
} from "../controllers/user.js";

const router = express.Router();

router.post("/adduser", addUser);
router.post("/login", Login);


export default router;