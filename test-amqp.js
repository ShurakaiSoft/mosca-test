/**
 * This is a test client/server for sending AMQP formatted messages to a message
 * broker.
 *
 */


// so I assume we're going to need to import something that can send AMQP type
// messags
//


// dependencies
var amqp = require('amqp');


// variables
var connection,
	options;

options = {
	host: 'localhost'
};



// create a connection to RabbitMQ
console.log('connecting to ', options.host);
connection = amqp.createConnection(options);

connection.on('ready', function () {

	console.log('got a ready event');

	console.log('trying to publish something...');
	connection.publish('ascolatore5672', 'hello world', {}, function (err) {
		console.log('after publishing we got', err);
	});

	console.log('listen for stuff');
	connection.queue('ascolatore5672', function (q) {
		// catch all messages
		q.bind('#');

		// Receive messages
		q.subscribe(function (message) {
			console.log('Received', message);
		});
	});
});

