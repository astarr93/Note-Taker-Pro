const app = express();
const express = require("express");
const fs = require("fs");
const path = require('path');
const port = process.env.PORT || 3000;





app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    notes = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(notes));
});

app.post("/api/notes", function (req, res) {
    notes = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(notes));
});

app.post("/api/notes", function (req, res) {
    notes = fs.readFileSync(".db/db.json");
    notes = JSON.parse(notes);
    let newNotes = req.body;
    newNotes["id"] = newNotes.title;
    notes.push(newNotes);
    fs.writeFile("./db/db.json", notes, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully updated!");
    });
    res.json(notes);
});