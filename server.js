const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');  // Required for serving static files

// Initialize the app
const app = express();
app.use(bodyParser.json());

// Enable CORS for all requests (or limit it to your frontend origin)
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests only from your React app
  methods: ['GET', 'POST'],  // Allow specific methods
  credentials: true  // Allow credentials if necessary
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

// Serve static files from the React app (in production)
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, 'build')));

  // All other GET requests not handled by the API routes will return the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
