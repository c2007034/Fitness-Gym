const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    weight: { type: Number },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    progress: [{ weight: Number, date: { type: Date, default: Date.now } }]
});

module.exports = mongoose.model("User", UserSchema);
