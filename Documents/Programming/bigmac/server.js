const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes/index'));

app.use('*', (req, res, next) => {
  res.status(500).send(
      {hostname: req.hostname,
      message: "Route does NOT exist"
  });
});
 
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})

module.exports = app;