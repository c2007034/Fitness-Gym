const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const upload = require("../middleware/uploadMiddleware");
require("dotenv").config();

const router = express.Router();

// User Signup with Profile Picture Upload
router.post("/signup", upload.single("profilePicture"), async (req, res) => {
  const { name, email, password, age, weight, phone } = req.body;

  const profilePicture = req.file ? `/uploads/${req.file.filename}` : "";

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, age, weight, phone, profilePicture });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", profilePicture });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, email: email }, process.env.JWT_SECRET);

    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
