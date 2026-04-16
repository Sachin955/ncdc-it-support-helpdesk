const mongoose = require('mongoose');


//describe the data structure
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'employee' }
});

module.exports = mongoose.model('User', userSchema);