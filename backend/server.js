const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./Models/User/User");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });

    await newUser.save();

    res.status(201).send("User created successfully!");
  } catch (error) {
    res.status(400).send("Error creating user:" + error.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
