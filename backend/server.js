const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const musicRouter = require("./controllers/musicController");
const app = express();
const config = require("./utils/config");
const logger = require("./utils/logger");
// middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.static("dist"));
// mongoose connection to mongodb database
mongoose
  .connect(config.MONGODB_URL)
  .then(() => logger.info("mongoDB connected"))
  .catch((error) => logger.error(error));

// routes
app.use("/api/songs", musicRouter);

app.listen(config.PORT);
logger.info(`Server running on port ${config.PORT}`);
