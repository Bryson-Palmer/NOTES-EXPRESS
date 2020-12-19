// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Settup folder public and contents as static files
app.use(express.static('public'));
 

// Routes
// =============================================================

app.get('/api/notes', function(req, res) {

    // Use the fs module to read the `db.json`file
    

    // Using our `.then` to parse the file contents with JSON.parse() to the real data

    
    // Send the parsed data back to the client with res.json()
    return res.json();

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

// Sends the user to the notes page
app.get('/notes', function (req, res) {

    // Returns the contents of the notes.html
    res.sendFile(path.join(__dirname, 'notes.html'));

});

// Basic route sending user first to the index page
app.get('*', function (req, res) {

    // Returns the contents of the index.html
    res.sendFile(path.join(__dirname, 'index.html'));

});

 
// Starts the server to begin listening
// =============================================================
app.listen( PORT, function() {
    console.log( 'App listening on PORT: http://localhost:' + PORT );
});