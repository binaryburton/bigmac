const apiRoute = require("express").Router();

apiRoute.use("/ip", require("./IP-Vigilante/ip-vigilante"));

module.exports = apiRoute;
