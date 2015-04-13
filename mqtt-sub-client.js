/**
 * A test client that should connect to a Mosca Server and subscribe to
 * something
 *
 */


// dependencies
var mqtt = require('mqtt');


// private variables
var client,
	options;


// start the client
options = {
	host: 'localhost',
	port: 1883,
	clientId: 'mqtt-Client'
};

console.log('MQTT subscriber client connecting to %s:%s', options.host, options.port);
client = mqtt.connect(options);

client.subscribe('ascolatore5672');

client.on('message', function (topic, message) {
	console.log('%s received message: %s', Date().toString(), message);
});
