const express = require("express");
const Progress = require("../models/Progress");
const User = require("../models/User");

const router = express.Router();

// Add progress entry
router.post("/add", async (req, res) => {
    try {
        const { weight, bodyFat, workoutDays, waterIntake, caloriesBurned, measurements } = req.body;

        const newProgress = new Progress({
            userId: req.user.id,
            weight,
            bodyFat,
            workoutDays,
            waterIntake,
            caloriesBurned,
            measurements,
        });

        await newProgress.save();

        await User.findByIdAndUpdate(req.user.id, {
            weight,
        });

        res.status(201).json({ message: "Progress added successfully", progress: newProgress });
    } catch (error) {
        console.log('came in add error', error);

        res.status(500).json({ message: "Server error", error });
    }
});

// Get user progress history
router.get("/history", async (req, res) => {
    try {
        const history = await Progress.find({ userId: req.user.id }).sort({ date: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Delete a progress entry
router.delete("/:id", async (req, res) => {
    try {
        await Progress.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Progress entry deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;

