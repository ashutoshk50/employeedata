const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const Registrationdata = require('./src/models/regsitermodels'); //this is model of the database
const registrationController = require('./controller/registrationController'); // using controller
const expressHandlebars = require("express-handlebars");
const port = process.env.PORT || 3500;
require("./src/database/conn"); //establishing a connection with database
const staticPath = path.join(__dirname, "public");
const templatePath = path.join(__dirname, "templates/views");
const partialsPath = path.join(__dirname, "templates/partials");
console.log(staticPath);

app.use(express.static(staticPath));
app.set('view engine', "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.listen(port, () => {
    console.log('App is running at' + port);
});

app.use('/', registrationController);
