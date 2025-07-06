import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";

let createToken = (email, id) => {
  var token = jwt.sign({ email, id }, process.env.JWT_SECRET);
  return token;
};

let handleUserRegistration = async (req, res) => {
  try {
    let { email, name, password } = req.body;

    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!email || !name || !password) {
      return res.json({
        success: false,
        message: "Enter all required fields",
      });
    }

    let exist = await userModel.findOne({ email });

    if (exist) {
      return res.json({ success: false, message: "User already exist" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email id" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should contain atleast 8 characters",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    let newUser = { email, name, password: hash };

    const result = await userModel.create(newUser);

    let token = createToken(result.email, result._id);

    return res.json({ success: true, token, message: "Welcome!" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

let handleUserLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Enter all required fields",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email id" });
    }

    let exist = await userModel.findOne({ email });

    if (!exist) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    let result = await bcrypt.compare(password, exist.password);

    if (!result) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    let token = createToken(exist.email, exist._id);

    return res.json({ success: true, token, message: "Welcome Back !" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default { handleUserRegistration, handleUserLogin };
