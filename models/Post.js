const { Schema, model } = require("mongoose");

const PostShema = new Schema({
  body: {
    type: String,
    required: true,
  },
});

module.exports = model("post", PostShema);
