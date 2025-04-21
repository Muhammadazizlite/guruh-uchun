import { Router } from "express";
import userController from "../controller/users.js"


const router = Router();

router
      .get("/users",userController.GET)

export default router