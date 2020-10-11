const path = require("path");
const fs = require('fs');
const db = require('../db/db.json');

module.exports = function (app) {

    let data = [];

    app.get("/api/notes", function (req, res) {
        data.push(fs.readFile(db));
        console.log(data);
        res.json(JSON.parse(data));
    });

    // app.post("/api/notes", function (req, res) {
    //     let newNote = req.body;
    //     console.log("Posting note...");
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