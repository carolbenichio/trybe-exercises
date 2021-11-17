const ApiError = require('./ApiError');

const errorHandler = (err, _req, res, _next) => {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Out of my control" });
  }
};

module.exports = { errorHandler };