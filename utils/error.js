exports.serverError = (res, err, next) => {
  console.log(err.message);
  res.status(400).json(err.message);
  next();
};
