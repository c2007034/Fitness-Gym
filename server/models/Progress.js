const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weight: { type: Number, required: true },
  bodyFat: { type: Number, default: null }, 
  workoutDays: { type: Number, default: 0 },
  waterIntake: { type: Number, default: 0 },
  caloriesBurned: { type: Number, default: 0 },
  measurements: {
    chest: { type: Number, default: null },
    biceps: { type: Number, default: null },
    waist: { type: Number, default: null },
    legs: { type: Number, default: null },
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Progress", ProgressSchema);
