import { Router } from "express";
import userController from "./controller/users.js"


const router = Router();

router
      .get("/api/todos/:id",userController.GET)
      .post("/api/todos",userController.POST)
      .delete("/api/todos/:id",userController.DELETE)
      .put("/api/todos",userController.PUT)

export default router