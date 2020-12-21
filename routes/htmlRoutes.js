// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    // Sends the user to the notes page
    app.get('/notes', function (req, res) {

        // Return the contents of notes.html
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If no matching route is found 
    app.get('*', function (req, res) {

        // Return the contents of index.html
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};