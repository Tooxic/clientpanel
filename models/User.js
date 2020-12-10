const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'member',
  },
  activation: {
    type: Boolean,
    default: false,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
  ram: {
    type: Number,
    default: 2048,
  },
  disk: {
    type: Number,
    default: 2048,
  },
  servers: {
    type: Number,
    default: 2048,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
