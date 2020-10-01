const axios = require('axios');

exports.getSingleIP = (req, res, next) => {
    try {
        axios.get('https://ipvigilante.com/json/73.221.170.233')
          .then((response) => {
            if (response.status === 200 && response.data.data) {
              res.status(200).send({data: response.data.data});
            } else if (response.status === 200 && !response.data.data) {
              res.status(204).send({message: 'No data from given IP'});
            } else {
              res.status(400).send({message: 'Error retreiving data'});
            }
          })
    } catch (error) {
        res.status(400).send({message: 'Error trying to find dog'});
        next(error);
    }   
}
