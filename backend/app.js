require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const upload = multer();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());


require("./routers")

// Configure body parser for URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));
// Configure body parser for JSON data
app.use(bodyParser.json());

// Handle multipart/form-data
app.use(upload.none());

// Set the PORT from environment variables or default to 0 if not specified
const PORT = process.env.PORT || 0;

// Start the server and listen on the specified port
app.listen(PORT, (err) => {
    if (err) {
        console.log("PORT ERROR", err); // Log error if there is an issue with the port
    } else {
        console.log(`App running on port ${PORT}`); // Log success message with the port number
    }
});
