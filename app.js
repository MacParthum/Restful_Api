// import the package
const express = require('express');

// execute the package
const app = express ();

const mongoose = require ('mongoose');

require('dotenv/config');


// route to home
app.get ('/', (req, res) => {
   res.send ('We are on home');
});
// route to posts
app.get ('/posts', (req, res) => {
    res.send ('We are on posts');
 });

 // connect to db using mongo db atlas 
 // mongodb+srv://Mac:<password>@restful.0us68.mongodb.net/restful?retryWrites=true&w=majority
 mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log ('Connected to DB!')
 );


// Start listening on port 3000
app.listen (3000);