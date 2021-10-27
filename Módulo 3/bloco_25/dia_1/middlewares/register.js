function register(req, res, next) {
  const { username, email, password } = req.body;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordType = typeof(password) === 'number';
  const passwordLength = password.toString().length >= 4 && password.toString().length <= 8;

  if (username.length <= 3 || !emailRegex.test(email) || !passwordType || !passwordLength) {
    return res.status(400).json({ "message": "invalid data" });
  }

  next();
}

module.exports = register;