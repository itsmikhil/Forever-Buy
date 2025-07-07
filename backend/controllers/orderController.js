import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// for admin panel
const getAllOrders = async (req, res) => {
  try {
    let result = await orderModel.find({}).populate("items.productId");

    return res.json({
      success: true,
      message: "Fetched all orders",
      allOrders: result,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {};

// for users
const placeOrder = async (req, res) => {
  try {
    let { userId, items, deliveryDetails, paymentMethod, amount } = req.body;

    console.log(userId, items, deliveryDetails, paymentMethod, amount);

    if (!items || !deliveryDetails || !paymentMethod || !amount) {
      return res.json({ success: false, message: "Enter all required fields" });
    }

    let orderData = {
      userId,
      items,
      deliveryDetails,
      paymentMethod,
      amount: Number(amount),
    };

    await orderModel.create(orderData);

    // set user cart to empty once order is placed
    let user = await userModel.findByIdAndUpdate(userId, { cartData: [] });

    return res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const placeOrderRazorpay = async (req, res) => {};

const placeOrderStripe = async (req, res) => {};

const getUserOrders = async (req, res) => {
  try {
    let { userId } = req.body;

    // mongodb query used
    const userOrders = await orderModel
      .find({ userId })
      .populate("items.productId");

    return res.json({
      success: true,
      message: "Fetched all orders for the user",
      userOrders,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export {
  getAllOrders,
  updateOrderStatus,
  getUserOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
};
