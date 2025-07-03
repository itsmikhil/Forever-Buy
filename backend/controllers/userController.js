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

    return res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default { handleUserRegistration };
