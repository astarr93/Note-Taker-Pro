const app = express();
const express = require("express");
const fs = require("fs");
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json);
