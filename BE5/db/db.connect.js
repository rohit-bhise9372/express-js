const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log("Error connecting to Database", error));
