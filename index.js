'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/', function (req, res) {
    
   console.log("These are the results:" + req.body.result);

});

restService.listen((process.env.PORT || 4200), function () {
    console.log("Server up and listening");
});


/*var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.c39e7281-db47-4729-82dc-be18472ccd65';

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var handlers = {

    'GetAnswerIntent': function () {
        this.emit(':tell', 'Here is your answer');
    },
    'Unhandled': function () {
        this.emit(':ask', 'Sorry come again');
    }

};*/
