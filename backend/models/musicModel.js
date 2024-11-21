const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Music", MusicSchema);
