const path = require("path");
const fs = require('fs');

module.exports = function (app) {

    let notes = fs.readFileSync("./db/db.json", "utf8");

    app.get("/api/notes", function (req, res) {
        res.json(JSON.parse(notes));
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        console.log(notes);
        // notes.push(newNote);
        // fs.writeFileSync("./db/db.json", newNote, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     else {
        //         res.status(200);
        //     };
        // });
        // res.json(notes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};