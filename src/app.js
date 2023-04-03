const express = require("express");
require("../src/db/conn");
const Blog = require("../src/models/blogs");
const blogRouter = require("./router/blog");
const app = express();

app.use(express.json());
app.use(blogRouter);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening to port number ${port}`);
});
