const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    contents: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
