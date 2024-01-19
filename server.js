const express = require("express");
const app = express();
const dbConnect = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const { signUp, signIn } = require("./controllers/smartHub");

app.use(express.json());
app.use(cors());

app.post("/create", signUp);
app.post("/create", signIn);

port = process.env.PORT || 8008;

dbConnect()
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
