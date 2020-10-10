const path = require("path");
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notes = fs.readFile("../db/db.json");
        res.json(JSON.parse(notes));
    });

    // app.post("/api/notes", function (req, res) {
    //     // let newNote = req.body;
    //     // notes.a
    //     // console.log(savedNotes);
    //     // notes.push(newNote);
    //     // fs.writeFileSync("./db/db.json", newNote, function (err) {
    //     //     if (err) {
    //     //         return console.log(err);
    //     //     }
    //     //     else {
    //     //         res.status(200);
    //     //     };
    //     // });
    //     // res.json(notes);
    // });

    app.delete("/api/notes/:id", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};