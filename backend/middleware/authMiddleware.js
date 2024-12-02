const jwt = require("jsonwebtoken");
const User = require("../Models/User/User");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token missing or invalid" });
    }

    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = { id: user._id, username: user.username, email: user.email };

    next();
  } catch (error) {
    console.error("Authorization error:", error.message);
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = authMiddleware;
