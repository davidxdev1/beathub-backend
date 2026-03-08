const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String },
  country: { type: String },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }]
}, { timestamps: true });

module.exports = mongoose.model("Artist", artistSchema);