require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoute");
const userRoutes = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/blog", blogRoutes); // used for fetch blogs data
app.use("/api/auth", userRoutes); // used for authentication

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
