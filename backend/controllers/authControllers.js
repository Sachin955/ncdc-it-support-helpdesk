// this file work as - data lata hai or DB mae save karta hai
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// REGISTER
const register = async (req, res) => {
  try {
    const { emp_id, name, email, division_name, phn_no, password } = req.body;
    console.log("BODY", req.body)

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      emp_id,
      name,
      email,
      division_name,
      phn_no,
      password: hashedPassword
    });

    res.status(201).json({
      message: "registered successfully",
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

    // ✅ Duplicate email handle यहाँ
    if (error.code === 11000) {
      return res.status(400).json({
        error: "Email already exists"
      });
    }

    console.log("ACTUAL ERROR:", error);   // 👈 add this
  res.status(500).json({ error: "Server error" });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body; // same field में email/emp_id आ रहा है

    // 👇 email OR emp_id दोनों check
    const user = await User.findOne({
      $or: [
        { email: email },
        { emp_id: email }
      ]
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // 👇 password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // 👇 token generate
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

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
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login };