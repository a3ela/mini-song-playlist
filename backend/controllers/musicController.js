const musicRouter = require("express").Router();
const Music = require("../models/musicModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (request, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

musicRouter.get("/", async (request, response) => {
  try {
    const songs = await Music.find({});
    response.status(200).json(songs);
  } catch {
    response.status(500).json({ error: "Internal server error" });
  }
});

musicRouter.post("/", upload.single("image"), async (request, response) => {
  const { name, artist, year } = request.body;
  try {
    if (!name || !artist || !year) {
      return response.status(400).json({ error: "missing required fields" });
    }
    const song = new Music({
      name,
      artist,
      year,
      image: request.file.path,
    });
    await song.save();
    response.status(201).json(song);
  } catch {
    response.status(500).json({ error: "Internal server error" });
  }
});

musicRouter.put("/:id", upload.single("image"), async (request, response) => {
  const { name, artist, year } = request.body;
  try {
    const { id } = request.params;
    if (!name || !artist || !year) {
      return response.status(400).json({ error: "missing required fields" });
    }
    const song = await Music.findByIdAndUpdate(id, request.body, { new: true });
    if (!song) return response.status(404).json({ error: "song not found" });
    response.status(200).json(song);
  } catch {
    response.status(500).json({ error: "Internal server error" });
  }
});

musicRouter.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const song = await Music.findByIdAndDelete(id);
    if (!song) return response.status(404).json({ error: "song not found" });
    response.status(204).end();
  } catch {
    response.status(500).json({ error: "Internal server error" });
  }
});

module.exports = musicRouter;
