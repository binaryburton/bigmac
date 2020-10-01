
const ipRoute = require('express').Router();
const ipController = require('./ip-vigilante.controller');

ipRoute.route('/test')
    .get(ipController.getSingleIP);

module.exports = ipRoute;