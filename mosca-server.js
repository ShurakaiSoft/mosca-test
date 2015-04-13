/**
 * this is a spike to test out how this mosca stuff does stuff
 */

// dependencies
var amqp  = require('amqp'),
	mosca = require('mosca');



// variables
var
	moscaSettingsRabbitMq,
	moscaSettingsMongo,
	server;


// setup some configuration
moscaSettingsRabbitMq = {
	port: 1883,
	backend: {
		type: 'amqp',
		json: false,
		amqp: amqp,
		exchange: 'ascolatore5672'
	},
	persistence: {
		factory: mosca.persistence.RabbitMQ
	}
};

moscaSettingsMongo= {
	port: 1883,
	backend: {
		type: 'mongo',
		url: 'mongodb://localhost:27017/mqtt',
		pubsubCollection: 'myCollection',
		mongo: {}
	},
	persistence: {
		factory: mosca.persistence.Mongo,
		url: 'mongodb://localhost:27017/mqtt'
	}
};


// start the server
server = new mosca.Server(moscaSettingsRabbitMq);


// add some event handlers
server.on('ready', function () {
	console.log('Mosca server is connected the %s exchange', moscaSettingsRabbitMq.backend.exchange);
	console.log('Mosca server is ready');
});

// fired when a client connects
server.on('clientConnected', function (client) {
	console.log('client %s connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Client Published:', packet.payload);
});

// fired when a client subscribes to a topic
server.on('subscribed', function(topic, client) {
  console.log('Client subscribed to:', topic);
});

// fired when a client subscribes to a topic
server.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed: %s', topic);
});

// fired when a client is disconnecting
server.on('clientDisconnecting', function(client) {
  console.log('clientDisconnecting: %s', client.id);
});

// fired when a client is disconnected
server.on('clientDisconnected', function(client) {
  console.log('clientDisconnected: %s', client.id);
});