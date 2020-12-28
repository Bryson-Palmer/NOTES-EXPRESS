// ===============================================================================
// LOAD DEPENDNECIES
// ===============================================================================

const fs = require("fs");
const path = require("path");
const chalk = require('chalk');
const { v4: uuidv4 } = require("uuid");

const dbDir = path.resolve(__dirname, "../db/");

// ===============================================================================
// LOAD STORE FUNCTIONS 
// ===============================================================================

// const store = require("../db/store.js");



module.exports = (app) => {
  // API GET, POST, & DELETE Requests
  // Below code handles when users view, add, or delete a note.
  // ---------------------------------------------------------------------------

    app.get("/api/notes", (req, res) => {

        // Read database of javascript object(s) and assign to variable
        let notes = readDb(res);

        // Send a json response object of notes back to the client
        return res.json(notes);

    });

    app.post("/api/notes", function(req, res) {

        // Access the javascript object in `req.body` and store in new variable
        let newNote = req.body;

        // Assign unique id to new note
        let noteId = uuidv4();
        newNote["id"] = noteId;
        
        // Read database of javascript object(s) and assign to variable
        let note = readDb(res);

        // Push the new note to the array list
        note.push(newNote);

        // Call write database function and pass in note
        writeDb(note);

        // Send a json response object of the database, with the new note, back to the client
        return res.json(newNote);

    });

    app.delete("/api/notes/:id", function(req, res) {

        // Access :id from `req.params.id` and store in new variable
        let noteId = req.params.id;

        // Read database of javascript object(s) and assign to variable
        let note = readDb(res);

        // Find the matching index of note using .findIndex() and the id element
        const findNoteByindexId = note.findIndex( ({id}) => id == noteId );    

        // Remove the target element from note using .splice()
        note.splice(findNoteByindexId, 1);

        // Re-write modified array of objects to database
        writeDb(note);

        // Return success message
        console.log(chalk.bgBlue("Success deleting note from database!"));

        // Send the modified database of notes back to the saved notes list
        return res.json(true);

    });

    readDb = (notes) => {

        try{    
            // Use the fs module to read the `db.json`file
            notes = fs.readFileSync(path.join(dbDir, "db.json"), "utf8")
            console.log(chalk.blueBright("Success reading database!"));
        } catch (err) {
            console.error(chalk.yellowBright("Had trouble reading database of notes " + err));
        }
        // Convert string of notes to a javascript object and return back to the GET request
        return JSON.parse(notes);
    }

    writeDb = (note) => {

        try{    
            // Save the contents back to the `db.json` with the fs module
            // Stringify note
            fs.writeFileSync(path.join(dbDir, "db.json"),  JSON.stringify(note))
            console.log(chalk.bgBlue("Success writing to database!"));
        } catch (err) {
            console.error(chalk.yellowBright("Had trouble writing to the database " + err));
        }

    }

};