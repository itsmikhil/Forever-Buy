import express from "express";
import {
  getAllOrders,
  updateOrderStatus,
  getUserOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
} from "../controllers/orderController.js";
import userAuth from "../middlewares/userAuth.js";
import adminAuth from "../middlewares/adminAuth.js";

const orderRouter = express.Router();

// admin fea
orderRouter.post("/list", adminAuth, getAllOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// user fea

//had to make post req because we wanted to use userID(in req body) from userAuth
orderRouter.post("/get", userAuth, getUserOrders);
orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay);
orderRouter.post("/stripe", userAuth, placeOrderStripe);

export default orderRouter;
