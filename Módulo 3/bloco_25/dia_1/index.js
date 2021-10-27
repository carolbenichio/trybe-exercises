// breakout 6
const isValid = require('./middlewares/validation');
const axios = require('axios');
const express = require('express');
const register = require('./middlewares/register');

const app = express();

app.use(express.json()); // atv 1

// atividade 1 

app.post('/user/register', register, function(_req, res) {
  return res.status(201).json({ "message": "user created" });
});

// atividade 2


app.get('/btc/price', isValid, async function(_req, res) {
  const url = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json)";

  const response = await axios.get(url);

  return res.status(200).send(response.data);
});

app.listen(3000, () => console.log("Using port 3999"));