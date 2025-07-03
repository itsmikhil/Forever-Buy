import jwt from "jsonwebtoken";

let createToken = (email) => {
  var token = jwt.sign({ email }, process.env.JWT_SECRET);
  return token;
};

let handleAdminLogin = (req, res) => {
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

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = createToken(email);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default { handleAdminLogin };
