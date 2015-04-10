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
console.log('MQTT Client');
client = mqtt.connect({ host: 'localhost', port: 1883 });

client.subscribe('presence');

console.log('Client publishing...');
client.publish('presence', 'Client is alive... test ping! hello world...' + Date());
// client.end();
