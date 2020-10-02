const ipRoute = require("express").Router();
const ipController = require("./ip-vigilante.controller");

ipRoute.route("/user").get(ipController.getUserIp);

ipRoute.route("/info/:ip").get(ipController.getIpInfo);

module.exports = ipRoute;
