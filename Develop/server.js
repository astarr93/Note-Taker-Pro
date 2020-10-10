const db = require("./db/db.json");
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup express.js middleware for JSON content-type and serve index.html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});