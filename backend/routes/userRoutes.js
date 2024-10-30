const express = require("express");
const User = require("../Models/User/User"); // Ensure this path is correct
const authMiddleware = require("../middleware/authMiddleware"); // Ensure this path is correct

const router = express.Router();

// User Registration Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      const token = user.generateAuthToken();
      res.json({ token, message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User Profile Route
router.get("/profile", authMiddleware, async (req, res) => {
  res.json(req.user);
});

module.exports = router; // Ensure you are exporting the router
