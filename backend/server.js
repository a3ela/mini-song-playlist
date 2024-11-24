const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const musicRouter = require("./controllers/musicController");
const app = express();
const config = require("./utils/config");

// middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.static("dist"));
// mongoose connection to mongodb database
mongoose
  .connect(config.MONGODB_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

// routes
app.use("/api/songs", musicRouter);

const PORT = config.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
