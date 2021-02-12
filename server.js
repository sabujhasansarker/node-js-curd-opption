const app = require("express")();

// meddleares 🙂
const middlewares = require("./middleware");
middlewares(app);

// router 🙂
const router = require("./router");
router(app);

// DB connaction 🙂
const DB = require("./config/db");
DB();

// Port 🙂
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
