var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '7a7e61ce-b562-4f06-9da9-2b3b82d3436f',
    appPassword: 'WF2hGAa4LePZoeNfAX5yeiQ'
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, [
    function (session) {
        //var msg = new builder.Message(session)
        //    .speak('Welcome to service now, how can I help you today?')
        //    .inputHint(builder.InputHint.acceptingInput);
        //session.send(msg);

        session.say('Hi there', 'do you what the ticket status?', {
            inputHint: builder.InputHint.expectingInput
        });

      /*  builder.Prompts.text(session, 'text based prompt', {
            speak: '',
            retrySpeak: 'do you what the ticket status?',
            inputHint: builder.InputHint.expectingInput
        });*/
       // builder.Prompts.text(session, "do you what the ticket status?");
    },
    
    function (session, results) {


        session.say('hello','hellooooo');

        //var http = require("https");

        //var options = {
        //    "method": "get",
        //    "hostname": "dev45250.service-now.com",
        //    "port": null,
        //    "path": "/api/now/table/sc_req_item?sysparm_query=active%3dtrue&sysparm_display_value=true&sysparm_exclude_reference_link=true&sysparm_fields=number%2csys_updated_on%2ccat_item%2copened_by%2cstate",
        //    "headers": {
        //        "authorization": "basic d2vidxnlcjpzaw11bgfandyx",
        //        "content-type": "application/json",
        //        "cache-control": "no-cache",
        //        "accept": "application/json",
        //        "postman-token": "e23b7736-4e12-de9f-9010-2576989194ae"
        //    }
        //};

        //var req = http.request(options, function (res) {
        //    var chunks = [];

        //    res.on("data", function (chunk) {
        //        chunks.push(chunk);
        //    });

        //    res.on("end", function () {
        //        var datetime = require('node-datetime');
        //        var datetime = require('node-datetime');
        //        var dt = datetime.create();
        //        var formatted = dt.format('y-m-d h:m:s');
        //        var body = buffer.concat(chunks);
        //        var resbody = body.tostring();
        //        resbody = json.parse(resbody);
        //        session.send(formatted + "  " + "request number: %s", resbody.result[0].number);
        //        var msg2 = new builder.message(session)
        //            .speak('request number is ' + resbody.result[0].number)
        //            .inputhint(builder.inputhint.acceptinginput);
        //        session.send(msg2);
                
        //       session.send(formatted +"  "+"request number: %s", resbody.result[0].number);
        //        console.log(resbody.result[0].number);
        //    });
        //});

        //req.end();
        //// session.send("request number: %s", session.message.text);
        ////session.send("request number: %s", resbody.result.number);

        session.endDialog();}
    
]);

