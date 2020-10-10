const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})


