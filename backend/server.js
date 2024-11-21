const express = require("express");
const mongoose = require("mongoose");
const musicRouter = require("./controllers/musicController");
const app = express();

// middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// mongoose connection to mongodb database
mongoose
  .connect(
    "mongodb+srv://abelsintayehu:abel1767@cluster0.kxtsypb.mongodb.net/songs?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

// routes
app.use("/api/songs", musicRouter);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
