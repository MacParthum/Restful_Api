// import the package
const express = require('express');

// execute the package
const app = express ();
const mongoose = require ('mongoose');

// middleware - a function that executes when a route is hit
// app.use ('/posts', () => {
//     console.log('This is a middleware running');
//  });



// route to home
app.get ('/', (req, res) => {
   res.send ('We are on home');
});
// route to posts
app.get ('/posts', (req, res) => {
    res.send ('We are on posts');
 });

 // connect to db using mongo db atlas 
 mongoose.connect("mongodb+srv://Mac:Harlan1370@restful.0us68.mongodb.net/restful?retryWrites=true&w=majority" , () =>
  console.log ('Connected to DB!')
 );


// Start listening on port 3000
app.listen (3000);