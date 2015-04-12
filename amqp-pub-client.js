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
	exchangeName;

exchangeName = 'ascolatore5672';
queueName = 'ascolatore5672';
options = {
	host: 'localhost',
	defaultExchangeName: exchangeName
};



// create a connection to RabbitMQ
console.log('connecting to ', options.host);
connection = amqp.createConnection(options);

// add event handlers
connection.on('ready', function () {

	console.log('AMQP test client (publisher) is publishing stuff');

	console.log('Publishing...');
	connection.publish(queueName, 'hello world', {}, function (err) {
		console.log('Successfully published:', !!err);
	});

	connection.end();
});

