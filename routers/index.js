import { Router } from "express";
import userController from "./controller/users.js"


const router = Router();

router
      .get("/users",userController.GET)
      .post("users",userController.POST)
      .delete("users/:id",userController.DELETE)
      .put("/users",userController.PUT)

export default router