const apiRoute = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

apiRoute.use("/api-docs", swaggerUi.serve);
apiRoute.get("/api-docs", swaggerUi.setup(swaggerDocument));
apiRoute.use("/ip", require("./IP-Vigilante/ip-vigilante"));

module.exports = apiRoute;
