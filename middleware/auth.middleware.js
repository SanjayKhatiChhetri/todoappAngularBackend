const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("X-XSRF-TOKEN");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // Set the user id on the request object
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
