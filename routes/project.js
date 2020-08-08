'use strict'

var express = require('express');

var userController = require('../controller/project');

var router = express.Router();


router.post('/enviar-datos', userController.enviarDatos);

module.exports = router;