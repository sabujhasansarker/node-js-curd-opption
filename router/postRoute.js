const router = require("express").Router();
const {
  getAllPost,
  addPost,
  deletePost,
  updatePost,
} = require("../controller/postController");

// Router
router.get("/", getAllPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

// module exports
module.exports = router;
