const express = require("express");
const app = express();
const postModel = require("./models/posts.model");


app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Here are all posts",
    posts,
  });
});

app.post("/posts", async (req, res) => {
  const post = await postModel.create({
    image: req.body.image,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "post created",
    post,
  });
});

module.exports = app;
