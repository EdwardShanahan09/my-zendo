const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes"); // Make sure this path is correct

const app = express();
app.use(cors());
app.use(express.json());

// Mount user routes
app.use("/api/users", userRoutes); // This line should be here

const PORT = process.env.PORT || 5001; // Ensure your PORT is correctly set

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("MongoDB connected...");
  })
  .catch((error) => console.log("MongoDB connection error:", error));
