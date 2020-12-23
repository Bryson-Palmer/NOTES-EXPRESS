// Create store class that accepts the data
// Do all the functionality that the `app.get` api routes do and put it in here
// In the servers file replace with `store.addNote()` or `store.deleteNote()`

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

// const fs = require('fs');
const path = require("path");

const dbDir = path.resolve(__dirname, "../db/");

class Store {

    readNotes(notes) {

        // Use the fs module to read the `db.json`file
        notes = fs.readFileSync(path.join(dbDir, "db.json"), 'utf8', (err, notes) => {
            if (err) {
                console.log("Error reading file:", err);
            }
            try {
                parsedNotes = JSON.parse(notes);
                console.log("Parsed data is: ", parsedNotes);
                return parsedNotes;
            } catch(err) {
                    console.log("Error parsing JSON string:", err);
                }
        });
        
    }

    addNote() {



    }

    deleteNote() {



    }

}



// module.exports = Store;