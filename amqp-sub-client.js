/**
 * This is a test AMQP subscriber client that connects to RabbitMQ
 *
 */


// dependencies
var amqp = require('amqp');


// variables
var connection,
	options;

queueName = 'ascolatore5672';
options = {
	host: 'localhost'
};


// create a connection to RabbitMQ
console.log('connecting to ', options.host);
connection = amqp.createConnection(options);


// Add event handlers
connection.on('ready', function () {

	console.log('AMQP test client (subscriber) is Ready');
	connection.queue(queueName, function (queue) {
		// catch all messages
		queue.bind('#');

		// Receive messages
		queue.subscribe(function (message) {
			// having issues with the type (formatting) of `message`
			console.log('Received', message);
		});
	});
});
