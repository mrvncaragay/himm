const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 81;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});