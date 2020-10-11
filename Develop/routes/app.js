const path = require("path");
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/api/notes", function (req, res) {
        res.sendFile("./db/db.json", "utf-8", function (err, data) {
            if (err) throw err;
            return JSON.parse(data);
        });
});

app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    newNote["id"] = uuidv4();
    console.log("Posting note...");
    console.log(newNote);
    res.end();
});

    // app.delete("/api/notes/:id", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"))
    // });
};