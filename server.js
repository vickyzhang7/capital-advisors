const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');  // Add path to serve the React build
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from your React app
  methods: ['GET', 'POST'],
  credentials: true
}));

// Database connection (adjust with your RDS credentials)
const db = mysql.createConnection({
  host: 'capital.c9ka68y4enc2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'BUzwq997997',
  database: 'capital'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to RDS:', err);
    return;
  }
  console.log('Connected to AWS RDS');
});

// Define the API route for contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';

  db.query(query, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error saving contact form:', err);
      res.status(500).send('Error saving contact form');
    } else {
      res.status(201).send('Contact form submitted successfully');
    }
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't match API routes, send the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
