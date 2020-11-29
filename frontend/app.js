const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 1234
const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/src'))

app.listen(port, () => console.log(
    `listening at http://localhost:${port}`
));