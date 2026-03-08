const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: Number }, // in seconds
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" }
}, { timestamps: true });

module.exports = mongoose.model("Song", songSchema);