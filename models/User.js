const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({  // telling mongoose what keys are going to be stored in exactly one record
  googleId: String,
  username: String,
  profilePhoto: String,
  stellarEffexCredits: { type: Number, default: 0 },
  mailCredits: { type: Number, default: 5 }
});

mongoose.model('users', userSchema); //creating users collection
