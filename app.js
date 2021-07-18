// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 23 - Intoduction to Express
//-----------
// WHAT THIS APP DOES------
// this app introduces the Express pkg

// require the installed express pkg
const express = require('express');

// create the express app
const app = express();

// set up 2 routes that resp to 2 client reqs
app.get('/', function (req, res) {
    res.send('This is the home page')
});

app.get('/contact', function (req, res) {
    res.send('This is the contact page')
});

// listen for port 3000
app.listen(3000);

// con.log a test mssg
console.log('\n"Server now listening to Port 3000, Yall!"\n');