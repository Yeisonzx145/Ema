const express = require('express')
const morgan = require("morgan");
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/index.routes')
const app = express()

const corsOptions = {
    origin:'*',
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(morgan("dev"));

app.use('/',router)

module.exports = app;