var express = require('express')
var bodyParser = require('body-parser')
var services = require('./services');

var database = require('./libs/database/mysql.js');
database.connectDatabase();

var app = express()

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store');
    res.setHeader('pragma', 'no-cache');
    next();
});


services.importAll(app, database);

app.listen(3000)