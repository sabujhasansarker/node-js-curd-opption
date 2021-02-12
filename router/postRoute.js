const router = require("express").Router();
const { getAllPost } = require("../controller/postController");

// Router
router.get("/", getAllPost);

// module exports
module.exports = router;
