const { User } = require("../models/smartHubSchema");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      throw new Error("All field is required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email is already registered");
    }

    const newSignup = await User.create({
      fullname,
      email,
      password,
    });

    res.status(200).json(newSignup);
  } catch (error) {
    res.status(402).json(error.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!email) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // res.status(200).json(newSignup);
    res.status(200).json({ message: "Login successful.", user: user });
  } catch (error) {
    // res.status(402).json(error.message);
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = { signUp, signIn };
