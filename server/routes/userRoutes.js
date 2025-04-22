const express = require("express");
require("dotenv").config();

const User = require("../models/User");

const router = express.Router();

// User details

router.get("/profile", async (req, res, next) => {
    const { email } = req.query;

    if (!email)
        return res.status(400).json({ message: "Email is required" });

    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "User not found" });

        const userData = user.toObject();
        userData.userId = user._id;

        res.status(200).json(userData);
        next();
    } catch (error) {
        console.error("Error in /profile:", error);
        res.status(500).json({ message: "Server Error" });
    }
});
module.exports = router;
