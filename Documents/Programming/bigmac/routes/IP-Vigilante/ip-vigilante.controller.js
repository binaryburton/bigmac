const axios = require("axios");

exports.getIpInfo = (req, res, next) => {
  const ifIpVigilanteIsDown = {
    ipv4: "8.8.8.8",
    continent_name: "North America",
    country_name: "United States",
    subdivision_1_name: "California",
    subdivision_2_name: null,
    city_name: "Mountain View",
    latitude: "37.38600",
    longitude: "-122.08380",
  };
  try {
    res.status(200).send({ data: ifIpVigilanteIsDown });
    // axios
    //   .get("https://ipvigilante.com/json/" + req.params.ip)
    //   .then((response) => {
    //     if (response.status === 200 && response.data.data) {
    //       res.status(200).send({ data: response.data.data });
    //     } else if (response.status === 200 && !response.data.data) {
    //       res.status(204).send({ message: "No data from given IP" });
    //     } else {
    //       res.status(400).send({ message: "Error retreiving data" });
    //     }
    //   });
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
        res.status(400).send({ message: "Error trying to retreive data" });
      }
    });
  } catch (error) {
    res.status(400).send({ message: "Error trying to retreive data" });
    next(error);
  }
};
