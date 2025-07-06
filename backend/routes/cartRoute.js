import express from "express";
import userAuth from "../middlewares/userAuth.js";
const cartRouter = express.Router();

import {
  handleAddToCart,
  handleUpdateCart,
  handleGetData,
  handleDeleteFromCart,
} from "../controllers/cartController.js";

// post req for getting because we want to use userId(in req body) which we set in userAuth
cartRouter.post("/get", userAuth, handleGetData);
cartRouter.post("/add", userAuth, handleAddToCart);
cartRouter.post("/update", userAuth, handleUpdateCart);
cartRouter.post("/delete", userAuth, handleDeleteFromCart);

export default cartRouter;
