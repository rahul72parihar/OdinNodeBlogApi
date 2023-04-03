const express = require("express");
const router = express.Router();

const Blog = require("../models/blogs");

router.get("/", (req, res) => {
  res.send("HomePage");
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById({ _id: req.params.id });
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/blog", async (req, res) => {
  try {
    const blogInstance = new Blog(req.body);
    const createBlog = await blogInstance.save();
    res.status(201).send(blogInstance);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(400).send("ID NOT FOUND, Please Be good");
    }
    res.status(201).send(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
