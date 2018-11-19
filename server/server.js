var config = require('./config'),
    express = require('express'),
    fs = require("fs"),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    pdfKit = require("pdfkit"),
    app = express(),
    apiRouter = express.Router(),
    path = require('path'),
    connection = mongoose.connect(config.database),
    cors = require('cors'),
    travelAgentController=require("./controllers/travelAgentController");

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});



app.use('/travelagents', travelAgentController);

if (app.listen(config.port)) {
    console.log("Connected on port " + config.port + " Database "+config.database);
}