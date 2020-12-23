// ===============================================================================
// LOAD DEPENDNECIES
// ===============================================================================

const fs = require("fs");
const path = require("path");
const chalk = require('chalk');

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

        let notes = readNotes(res);

        // Send the parsed data back to the client with res.json()
        return res.json(notes);

    });

    app.post("/api/notes", function(req, res) {

        // Access the POSTed data in `req.body`
        let newNote = req.body;
        
        // Call read notes function, pass the response, and assign it to notes
        let notes = readNotes(res);

        // Push the new note to the array list
        notes.push(newNote);

        // Call add note function pass in notes
        addNote(notes);

        // Save the contents back to the `db.json` with the fs module
        return res.json(newNote);

    });

    app.delete("/api/notes/:id", function(req, res) {

        // Access :id from `req.params.id`


        // Use the fs module to read the `db.json`file
        

        // Using our `.then` to parse the file contents with JSON.parse() to the real data


        // Option A
            // Find the matching index using .findIndex()
            // Remove the target element using .splice()

        
        // Option B
            // Use the Array.filter() method to filter out the matching element
            //  myArray = myArray.filter( element => element.id !== req.params.id );


        // Return any type of sucdcess message

    });

    readNotes = (notes) => {

        try{    
            // Use the fs module to read the `db.json`file
            notes = fs.readFileSync(path.join(dbDir, "db.json"), "utf8")
            console.log(chalk.bgBlueBright("Success reading notes!"));
        } catch (err) {
            console.error(chalk.yellowBright("Had trouble reading notes " + err));
        }
        return JSON.parse(notes);
    }

    addNote = (notes) => {

        try{    
            fs.writeFileSync(path.join(dbDir, "db.json"),  JSON.stringify(notes))
            console.log(chalk.bgBlueBright("Success adding note!"));
        } catch (err) {
            console.error(chalk.yellowBright("Had trouble adding note " + err));
        }
        return

    }

    // deleteNote() {



    // }

};