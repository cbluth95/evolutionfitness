const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const contactMail = require("./api/contactMail");
app.use(
  "/api/mail",
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  contactMail
);

const port = 3001;
app.listen(port);
console.log(`Server Started on port ${port}`);
