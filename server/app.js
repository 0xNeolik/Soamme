require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

// Routes
require("./routes");

require("./models/error-handling")(app);

module.exports = app;
