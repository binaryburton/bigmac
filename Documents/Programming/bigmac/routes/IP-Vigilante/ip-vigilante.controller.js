const axios = require("axios");

exports.getIpInfo = (req, res, next) => {
  try {
    axios
      .get("https://ipvigilante.com/json/" + req.params.ip)
      .then((response) => {
        if (response.status === 200 && response.data.data) {
          res.status(200).send({ data: response.data.data });
        } else if (response.status === 200 && !response.data.data) {
          res.status(204).send({ message: "No data from given IP" });
        } else {
          res.status(400).send({ message: "Error retreiving data" });
        }
      });
  } catch (error) {
    res.status(400).send({ message: "Error trying to retreive data" });
    next(error);
  }
};

exports.getUserIp = (req, res, next) => {
  try {
    axios.get("https://api.ipify.org/").then((response) => {
      if (response.status === 200 && response.data) {
        res.status(200).send({ data: response.data });
      } else if (response.status === 200 && !response.data) {
        res.status(204).send({ message: "No data from given IP" });
      } else {
        res.status(400).send({ message: "Error retreiving data" });
      }
    });
  } catch (error) {
    res.status(400).send({ message: "Error trying to retreive data" });
    next(error);
  }
};
