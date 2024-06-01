const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import the uuid library

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const clientData = req.body;
    console.log('Client data received:', clientData);
    
    // Generate a unique submission number
    const submissionNumber = uuidv4();

    // Log the submission number
    console.log('Submission Number:', submissionNumber);

    // Send the submission number back to the client
    res.send(`Form submission successful! Your submission number is: ${submissionNumber}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
