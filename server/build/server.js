"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { GeneratorController } = require('./routes/index');
const zip = require('express-easy-zip');
const app = express();
const path = require('path');
const port = process.env.PORT || 1337;
app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use('/', GeneratorController);
app.use('/generate', GeneratorController);
app.use(zip());
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
