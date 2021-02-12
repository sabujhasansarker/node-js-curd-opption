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
