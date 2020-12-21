// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const fs = require('fs');


// ===============================================================================
// LOAD DATA
// ===============================================================================

const db = require("./db/db.json");


// ===============================================================================
// LOAD STORE FUNCTIONS 
// ===============================================================================

const store = require("../db/store");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // They are shown a JSON of the data
  // ---------------------------------------------------------------------------

app.get('/api/notes', function(req, res) {

    // Use the fs module to read the `db.json`file
    fs.readFile("./db/db.json", 'utf8', (err, notes) => {
        if (err) {
            console.log("Error reading file:", err);
            return
        }
        try {
            const parsedNotes = JSON.parse(notes);
            console.log("Saved note id is: ", savedNotes.id);
        } catch(err) {
                console.log("Error parsing JSON string:", err)
            }
    });

    // Send the parsed data back to the client with res.json()
    return res.json(parsedNotes);

});

app.post('/api/notes', function(req, res) {

    // Access the POSTed data in `req.body`
    

    // Use the fs module to read the `db.json`file
    

    // Using our `.then` to parse the file contents with JSON.parse() to the real data


    // Push the `req.body` to the array list


    // JSON.stringify() the array list back into a JSON string


    // Using our `.then` save the contents back to the `db.json` with the fs module


});

app.delete('/api/notes/:id', function(req, res) {

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

};