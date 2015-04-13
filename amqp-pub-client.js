/**
 * This is a test client for an AMQP publishing client that connects to a
 * RabbitMQ server.
 *
 */

// dependencies
var amqp = require('amqp');


// variables
var connection,
	options,
	queueName,
	message;

queueName = 'ascolatore5672';
message = 'Hello World';
options = {
	host: 'localhost'
};



// create a connection to RabbitMQ
console.log('connecting to ', options.host);
connection = amqp.createConnection(options);

// add event handlers
connection.on('ready', function () {

	console.log('AMQP test client (publisher) is ready');

	connection.publish(queueName, message);
	console.log('Published: ', message);
});
