const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', routes);

app.use(error);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});