const mongoose = require("mongoose");
const url = require("config").get("mogoUrl");

module.exports = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
