const path = require("path");
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));

module.exports = function (app) {


    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/api/notes", function (req, res) {
        res.json(savedNotes);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote["id"] = uuidv4();
        console.log("Posting note...");
        savedNotes.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        res.end();
    });

    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        let updatedList = savedNotes.filter(note => {
            return (note.id !== req.params.id);
        });
        fs.writeFileSync("./db/db.json", JSON.stringify(updatedList));
        res.end();
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};