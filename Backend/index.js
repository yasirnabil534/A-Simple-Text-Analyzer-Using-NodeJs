const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log('Server listening on port ' + port);
});