const mongoose = require("mongoose");
const validator = require("validator");

const blogSchema = new mongoose.Schema({
  heading: { type: String, required: true, minlength: 3 },
  detail: { type: String, required: true, minlength: 10 },
  author: { type: String, required: true },
});

const blog = new mongoose.model("Blog", blogSchema);

module.exports = blog;
