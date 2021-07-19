const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
const db = require("./models")
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000

const formidable = require('formidable');
const fs = require("fs");

global.__basedir = __dirname;
// parse requests of content-type - application/json 
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded    
app.use(bodyParser.urlencoded({extended: true})); 
//app.use(express.urlencoded());
app.use(cors());
app.use('/api', routes);

//sync DB
db.sequelize.sync({
        alter: true, 
//     logging: console.log
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

