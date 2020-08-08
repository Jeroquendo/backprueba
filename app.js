'use strict'

var express = require('express');

var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());

var user_route = require('./routes/project')
//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas
app.use('/',user_route);


module.exports = app;