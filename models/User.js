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
  cpu_cores: {
    type: Number,
    default: 0.7,
  },
  ram: {
    type: Number,
    default: 1024,
  },
  disk: {
    type: Number,
    default: 2048,
  },
  servers: {
    type: Number,
    default: 1,
  },
  databases: {
    type: Number,
    default: 2,
  },
  ports: {
    type: Number,
    default: 5,
  },
  ram_used: {
    type: Number,
    default: 0,
  },
  disk_used: {
    type: Number,
    default: 0,
  },
  servers_used: {
    type: Number,
    default: 0,
  },
  databases_used: {
    type: Number,
    default: 0,
  },
  ports_used: {
    type: Number,
    default: 0,
  },
  beta_access: {
    type: String,
    default: 'No',
  },
  pterodactyl_user_id: {
    type: Number,
    default: '',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;