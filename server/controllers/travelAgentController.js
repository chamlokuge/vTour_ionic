
var config = require('../config'),
    express = require('express'),
    fs = require("fs"),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    pdfKit = require("pdfkit"),
    app = express(),
    apiRouter = express.Router(),
    path = require('path'),
    connection = mongoose.connect(config.database),
    travelagents = require('../models/travelagent');

apiRouter.get('/', function (req, res) {
    travelagents.find((err, recs) => {
        if (!err) {
            console.log(recs);
            res.send(recs);
        } else {
            console.log("Error");
        }
    });
});

apiRouter.post('/', function (req, res) {
    var fname = req.body.fname,
        lname = req.body.lname,
        username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        telephone = req.body.telephone,
        address = req.body.address,
        isadmin = req.body.isadmin,
        profilepic = req.body.profilepic,
        usertype = req.body.usertype

    travelagents.create({
        fname: fname,
        lname: lname,
        username: username,
        password: password,
        email: email,
        telephone: telephone,
        address: address,
        isadmin: isadmin,
        profilepic: profilepic,
        usertype: usertype
    },
        function (err, small) {
            if (err) {
                console.dir(err);
            }
            res.json({ message: 'success' });

        });

});

apiRouter.delete('/:recordID', function (req, res) {

    travelagents.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) => {
        if (err) {
            console.dir(err);
        }
        res.json({ records: recs });

    });
});

module.exports=apiRouter;