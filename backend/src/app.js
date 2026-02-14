const express = require("express");
const cors = require("cors");
const multer = require("multer");
const postModel = require("./models/posts.model");
const upload_image = require("./services/storage.service");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Here are all posts",
    posts,
  });
});

app.post("/create-posts", upload.single("image"), async (req, res) => {

    const result = await upload_image(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "post created",
    post,
  });
});

module.exports = app;
