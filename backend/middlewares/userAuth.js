import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  let { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Please Login" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (err) {
    console.log(err.message);
    return res.json({ success: false, message: err.message });
  }
};

export default userAuth;
