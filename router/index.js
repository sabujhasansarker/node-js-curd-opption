const post = require("./postRoute");

const router = [{ path: "/post", handler: post }];

module.exports = (app) => {
  router.forEach((r) => {
    app.use(r.path, r.handler);
  });
};
