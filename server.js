const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// Setup express.js middleware for JSON content-type and serve index.html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Require app routes
require("./routes/app")(app);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});