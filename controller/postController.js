const Post = require("../models/PostModel");

// Error
const { serverError } = require("../utils/error");

exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.findOne();
    if (posts) {
      return res.status(200).json(posts);
    } else {
      return res.status(404).json({ msg: "Posts not found" });
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
