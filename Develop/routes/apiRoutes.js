const path = require("path");
const fs = require('fs');
const db = require("../db/db.json");

let notes = fs.readFileSync("./db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(JSON.parse(notes));
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        notes.push(newNote);
        fs.writeFileSync(db, newNote, function (err) {
            if (err) {
                return console.log(err);
            }
            else {
                res.status(200);
            };
        });
        res.json(notes);
    });

    // app.delete("/api/notes/:id", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"))
    // });
};