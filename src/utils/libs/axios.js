const axios = require("axios");
require("dotenv").config();

const BASEURL = "https://waba-sandbox.360dialog.io";

const url = axios.create({
  BASEURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    "D360-API-KEY": process.env.D360_API_KEY,
  },
});

module.exports = url;
