const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { appConfig } = require('./config');

const productosRouter = require('./routes/productos')

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ limit:'10mb', extended: true }));

app.use('/public', express.static(`${__dirname}/storage/imgs`));

app.use(session({
    secret: `${appConfig.secret}`,
    resave: false,
    cookie: {expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)},
    saveUninitialized: true}));

    app.use('/v1', productosRouter)

module.exports = app;