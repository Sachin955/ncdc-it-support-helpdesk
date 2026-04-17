// this file work as - data lata hai or DB mae save karta hai
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// REGISTER
const register = async (req, res) => {
  try {
    const { emp_id, name, email, division_name, phn_no, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      emp_id,
      name,
      email,
      division_name,
      phn_no,
      password: hashedPassword
    });

    // ✅ CLEAN RESPONSE (password hide + proper format)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        emp_id: user.emp_id,
        name: user.name,
        email: user.email,
        division_name: user.division_name,
        phn_no: user.phn_no,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    // ✅ CLEAN RESPONSE
    res.json({
      token,
      user: {
        emp_id: user.emp_id,
        name: user.name,
        email: user.email,
        division_name: user.division_name,
        phn_no: user.phn_no,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };