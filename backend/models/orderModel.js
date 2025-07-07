import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
    },
  ],
  deliveryDetails: {
    type: Object,
    required: true,
  },
  orderStatus: {
    type: String,
    default: "Order Placed",
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: Boolean,
    default: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: ()=>Date.now(),
    required: true,
  },
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
