import express from "express";
import {
  pincodeDataAutomation
 
} from "../controllers/data.js";

const router = express.Router();

router.get("/pinData", pincodeDataAutomation);



export default router;