exports.serverError = (res, err, next) => {
  console.log(err.message);
  res.status(500).json(err.message);
  next();
};
