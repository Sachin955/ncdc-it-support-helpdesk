const mongoose = require('mongoose');


//describe the data structure
const userSchema = new mongoose.Schema({
  emp_id:String,
  name: String,
  email: { type: String, unique: true },
  division_name: String,
  phn_no: Number,
  password: String,
  role: { type: String, default: 'employee' }
});

module.exports = mongoose.model('User', userSchema);