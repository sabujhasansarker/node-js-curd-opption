const router = require("express").Router();
const {
  getAllPost,
  addPost,
  deletePost,
} = require("../controller/postController");

// Router
router.get("/", getAllPost);
router.post("/", addPost);
router.delete("/:id", deletePost);

// module exports
module.exports = router;
