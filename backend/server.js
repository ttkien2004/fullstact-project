require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const Server = require("socket.io");
const authRoute = require("./routes/authRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
