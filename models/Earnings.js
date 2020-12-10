const mongoose = require("mongoose");

const earningsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Server = mongoose.model("Earnings", serverSchema);

module.exports = Earnings;
