const express = require("express");
const {
  getAllBlogs,
  createNewBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { requireAuth } = require("../middleware/requireAuth");
const routes = express.Router();

routes.use(requireAuth);

// get all blogs
routes.get("/getAll", getAllBlogs);
// delete blog
routes.delete("/deleteBlog", deleteBlog);
// update blog
routes.patch("/updateBlog");
// create new blog
routes.post("/createBlog", createNewBlog);

module.exports = routes;
