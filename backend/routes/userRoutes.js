const express = require("express");
const User = require("../Models/User/User");
const router = express.Router();
const jwt = require("jsonwebtoken");

// User Registration Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already in use" });
    }

    // Create and save the new user
    const user = new User({ username, email, password });
    await user.save();

    // Generate a token for the user
    const token = user.generateAuthToken();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token,
        user: { id: user._id, email: user.email, username: user.username },
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during registration",
    });
  }
});

// User Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      // Generate a token for the user
      const token = user.generateAuthToken();
      return res.json({
        success: true,
        message: "Login successful",
        data: {
          token,
          user: { id: user._id, email: user.email, username: user.username },
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
});

module.exports = router;
