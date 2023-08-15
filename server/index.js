const express = require('express');
const cors = require('cors');
require('dotenv').config();
const data = require('../public/data.json');

const app = express();

// https://stackoverflow.com/questions/32679505/node-and-express-send-json-formatted
app.use(cors());
app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.status(200).json(data);
  // res.status(200).send('successful request to /');
});

app.get('/fakeroute', (req, res) => {
  res.status(200).json(data);
  // res.status(200).send('successful request to /fakeroute');
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server now listening on PORT ${PORT}`);
});
