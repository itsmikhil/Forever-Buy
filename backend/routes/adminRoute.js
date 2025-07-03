import express from "express";
import adminCotroller from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminCotroller.handleAdminLogin);

export default adminRouter;
