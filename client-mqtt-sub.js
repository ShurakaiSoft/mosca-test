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
	port: 1883
};

console.log('MQTT subscriber client connecting to %s:%s', options.host, options.port);
client = mqtt.connect(options);


client.subscribe('presence');

client.on('message', function (topic, message) {
	console.log('%s received message: %s', Date().toString(), message);
});