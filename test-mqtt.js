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
var client;


// create a client
client = mqtt.connect('mqtt://localhost');


client.on('connect', function () {
	client.subscribe('presence');
	client.publish('presence', 'Hello mqtt');
});


client.on('message', function (topic, message) {
	console.log(message.toString());
});