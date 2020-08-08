'use strict'

var app = require('./app');
var port =  8500;


app.listen(port, () => {
    console.log('Servidor corriendo');
});