const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt; // from cookie

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Invalid token");
  }
});
module.exports = protect;