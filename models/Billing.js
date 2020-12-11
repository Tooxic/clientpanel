const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Billing = mongoose.model("Billing", billingsSchema);

module.exports = Billing;