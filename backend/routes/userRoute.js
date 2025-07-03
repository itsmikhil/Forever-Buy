import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

// register
userRouter.post("/register", userController.handleUserRegistration);
userRouter.post("/login", userController.handleUserLogin);

export default userRouter;
