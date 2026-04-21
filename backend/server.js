// only for testing
require('dotenv').config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const express = require('express');// creates server
const cors = require('cors');// connect front to backend
const mongoose = require('mongoose');// connect back to database
require('dotenv').config();// load .env file

const app = express();//server instance


//middleware

app.use(cors());// allow request from frontend (port 3000 -> 5000)
app.use(express.json());// converts incoming JSON to JS object


//Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/authRoutes'));//Routes Connection



app.listen(5000, () => {
  console.log('Server running on port 5000');
});

