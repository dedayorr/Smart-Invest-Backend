const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", signUpSchema);

module.exports = { User };
