//import reqired packages
const express = require('express');
const bodyParser = require('body-parser');

//Connecting MongoDB Databse
const connectDB = require('./config/database');
connectDB();

//instance of express.js server
const app = express();
//parsing req bodies as JSON
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));