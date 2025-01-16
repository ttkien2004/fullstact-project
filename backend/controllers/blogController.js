const BlogModel = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getAllBlogs = async (req, res) => {
  console.log(req.user._id);
  try {
    const user_id = req.user._id;
    const blogs = await BlogModel.find({ user_id }).sort({
      createdAt: -1,
    });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ error: "Cannot fetch data" });
  }
};
// delete blog
const deleteBlog = async (req, res) => {
  const { _id } = req.query;
  console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ error: "This blog does not exist" });
  }
  try {
    const blog = await BlogModel.findOneAndDelete({ _id });
    res.status(200).json({ data: blog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// update blog
// create new blog
const createNewBlog = async (req, res) => {
  const { author, contents } = req.body;
  //console.log(author, contents);
  if (!author || !contents) {
    res.status(400).json({ error: "These fields must be filled" });
  }
  try {
    const user_id = req.user._id;
    const newBlog = await BlogModel.create({ author, contents, user_id });
    res.status(200).json({ data: newBlog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllBlogs,
  createNewBlog,
  deleteBlog,
};
