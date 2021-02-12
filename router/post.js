const router = require("express").Router();
const { getAllPost } = require("../controller/post");

router.get("/", getAllPost);

module.exports = router;
