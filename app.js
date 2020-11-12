const express = require('express');

const app = express ();

// Routes
app.get ('/', (req, res) => {
   res.send ('We are on home');
});

// Start listening on port 3000
app.listen (3000);