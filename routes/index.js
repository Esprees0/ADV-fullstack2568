require("dotenv").config();

const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();


const base_url = "";

app.set("view", path.join(__dirname, "../public/views"));