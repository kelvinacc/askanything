'use strict';

var AlexaLambdaHandler = require('./lib/alexa');

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var handlers = {

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }

};


module.exports.handler = AlexaLambdaHandler.LambdaHandler;
module.exports.CreateStateHandler = AlexaLambdaHandler.CreateStateHandler;
module.exports.StateString = AlexaLambdaHandler.StateString;



