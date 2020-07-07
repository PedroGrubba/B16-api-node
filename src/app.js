const express = require("express");
const routes = require('./routes');
const bodyParser    = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => { 
    console.log(" > Server is runnig in: ", 3000);
});