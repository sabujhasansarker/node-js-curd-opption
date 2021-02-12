const Post = require("../models/PostModel");

// Error
const { serverError } = require("../utils/error");

exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.findOne();
    if (posts) {
      return res.status(200).json(posts);
    } else {
      return res.status(404).json({ msg: "Posts not found 🎈" });
    }
  } catch (err) {
    serverError(res, err, next);
  }
};

exports.addPost = async (req, res, next) => {
  try {
    const { body } = req.body;
    if (body.length <= 5 || body.length > 20) {
      return res
        .status(400)
        .json({ msg: "Plz input minimum 5 character to 20 character 😥" });
    } else {
      const newPost = new Post({
        body,
      });
      newPost.save();
      res.status(200).json(newPost);
    }
  } catch (err) {
    serverError(res, err, next);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found 😥" });
    } else {
      await Post.findByIdAndDelete(id);
      return res.status(200).json({ msg: "Post deleted ✔" });
    }
  } catch (err) {
    serverError(res, err, next);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { body } = req.body;
    let post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found 😥" });
    } else {
      post = await Post.findByIdAndUpdate(
        id,
        { $set: { body } },
        { new: true }
      );
      return res.status(200).json(post);
    }
  } catch (err) {
    serverError(res, err, next);
  }
};
