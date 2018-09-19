"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { GeneratorController } = require('./routes/index');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
app.use(logger('dev'));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use('/', GeneratorController);
app.use('/generate', GeneratorController);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
