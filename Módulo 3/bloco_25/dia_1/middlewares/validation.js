function isValid(req, res, next) {
  const authorization = req.headers.authorization;
  
  if (authorization.length !== 12) {
    return res.status(401).json({ "message": "invalid token" });
  }

  next();
}

module.exports = isValid;