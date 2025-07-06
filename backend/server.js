import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoDBConnect from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

mongoDBConnect();
connectCloudinary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, console.log(`Server is listening at ${port}`));
