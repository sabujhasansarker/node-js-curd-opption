const app = require("express")();

// meddleares 🙂
// router 🙂
// DB connaction 🙂
const DB = require("./config/db");
DB();

// Port 🙂
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
