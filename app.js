const express = require('express');
const app = express ();
const mongoose = require ('mongoose');
require('dotenv/config');

const postsRoute = require ('./routes/posts');

app.use ('/posts', postsRoute);

// route to home
app.get ('/', (req, res) => {
   res.send ('We are on home');
});

 // connect to db using mongo db atlas 
 mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log ('Connected to DB!')
 );

// Start listening on port 3000
app.listen (3000);