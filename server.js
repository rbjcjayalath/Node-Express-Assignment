const express = require("express");
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.static('public'));

//  Variable 
let submittedName = ""; 

// 1. POST route 
app.post('/api/submit-name', (req, res) => {
    submittedName = req.body.name; 
    res.status(200).send("Success"); 
});

// 2. GET route 
app.get('/api/get-greeting', (req, res) => {
    res.json({ greeting: `Hello, ${submittedName}!` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});