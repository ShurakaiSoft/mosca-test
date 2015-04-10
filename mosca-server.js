/**
 * this is a spike to test out how this mosca stuff does stuff
 */

// dependencies
var amqp  = require('amqp'),
	mosca = require('mosca');



// variables
var moscaSettings,
	pubsubsettings,
	server;


// setup some configuration
pubsubsettings = {
	type: 'amqp',
	json: false,
	amqp: amqp,
	exchange: 'ascolatore5672'
};
moscaSettings = {
	port: 1883,
	packend: pubsubsettings
};


// start the server
server = new mosca.Server(moscaSettings);


// attach some events
server.on('ready', function () {
	console.log('mosca server is up and running...Yay!');
});

server.on('clientConnected', function (client) {
	console.log('client connected', client.id);
});
