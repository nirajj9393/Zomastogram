const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/user.model');
const asyncHandler = require('express-async-handler');

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};


const postResister = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401);
    throw new Error("All fields must be filled");
  }

  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(500);
    throw new Error("Server error");
  }
});

const postLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields must be filled");
  }

  const existUser = await User.findOne({ email });
  if (!existUser) {
    res.status(401);
    throw new Error("User not registered");
  }

  const isMatchPassword = await bcrypt.compare(password, existUser.password);
  if (!isMatchPassword) {
    res.status(401);
    throw new Error("Password does not match, try again");
  }

  const token = generateToken(existUser._id);

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    user: {
      name: existUser.name,
      email: existUser.email,
    },
    token, 
  });
});

const getLogout = asyncHandler(async (req, res, next) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = {
  postLogin,
  postResister,
  getLogout,
};
