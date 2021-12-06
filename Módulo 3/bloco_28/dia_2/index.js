const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Oi!'));

app.listen(3000, () => console.log('Ouvindo na 3000'));