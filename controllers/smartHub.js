const mongoose = require("mongoose");
const smart = require("../models/smartHubSchema");

const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      throw new error("All field is required");
    }
    const newSignup = await smart.create({
      fullname,
      email,
      password,
    });

    res.status(200).json(newSignup);
  } catch (error) {
    res.status(402).json(error.message);
  }
};

module.exports = {signUp}
