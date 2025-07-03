import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoDBConnect from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

mongoDBConnect();

app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.use("/api/admin",adminRouter)
app.use("/api/user",userRouter)
// app.use("/api/products",)

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, console.log(`Server is listening at ${port}`));
