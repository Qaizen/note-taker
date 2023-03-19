//import Express.js framework modue and assign constant variable names 'express'
const express = require('express');
//import apiRoutes folder 
const apiRoutes = require('./routes/apiRoutes');
//import htmlRoutes folder 
const htmlRoutes = require('./routes/htmlRoutes');

//use process.env.PORT environment variable if it exists, otherwise default to port 3001
const PORT = process.env.PORT || 3001;

//create new isntance of Express.js appicaiton w express() funtion assigned to 'app'
const app = express();

//Important Order:  1. express.json, 2. express.urlencoded, 3. express.static('public'), 4. routes, 5. listen
//express.json() middleware function 
app.use(express.json());

//middleware function to handle incoming requests with a URL-encoded payload. This function parses the URL-encoded data and makes it available in the 'request.body' property of the request object.
app.use(express.urlencoded({ extended: true }));

// middleware function serve  HTML, CSS, and JavaScript files from the 'public' folder in the project directory.
app.use(express.static('public'));

//routes - put '/api' before '/' to elimate errors
app.use('/api', apiRoutes);     //do not add this line until the apiRoutes has been set up.  You will get an error when testing.
app.use('/', htmlRoutes);       // the '/' is for front-end 

//listen 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})