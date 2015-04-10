/**
 * this is a test server/client to pubsub MQTT messages to the Mosca server
 *
 */


// not even sure what I should have here.
//
// I assume this will be a TCP server/client that will send messages into this
// queue and we'll see what we get back out of it
//

// dependencies
var mqtt = require('mqtt');

// private varaibles
var client,
	options;


// create a client
options = {
	host: 'localhost',
	port: 1883
};
console.log('MQTT publisher client connecting to %s:%s', options.host, options.port);
client = mqtt.connect(options);

client.subscribe('presence');

console.log('Publishing stuff...');
client.publish('presence', 'Client is alive... test ping! hello world...' + Date());

console.log('My work is done.');
client.end();
