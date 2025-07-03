import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

// register
userRouter.post("/register", userController.handleUserRegistration);

export default userRouter;
