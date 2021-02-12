const router = require("express").Router();
const { getAllPost, addPost } = require("../controller/postController");

// Router
router.get("/", getAllPost);
router.post("/", addPost);

// module exports
module.exports = router;
