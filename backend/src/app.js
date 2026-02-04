const app = require("../server");
const connect = require("./db/db");
const express = require("express");
const postModel = require("../models/posts.model");

connect();

app.listen(3000, () => {
    console.log("connected to port 3000")
});

app.use(express.json());

app.get("/posts" , async (req,res) => {
    const posts =  await postModel.find();

    res.status(200).json({
        message:"Here are all posts",
        posts
    })
});


app.post("/posts" , async (req,res) => {
    const post = await postModel.create({
        image:req.body.image,
        caption:req.body.caption
    });

    res.status(201).json({
        message:"post created",
        post
    })
});

