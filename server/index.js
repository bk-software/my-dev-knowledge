const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(PORT, () => console.log("server running on port", PORT));
