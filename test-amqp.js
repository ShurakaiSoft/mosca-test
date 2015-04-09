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
var connection;

console.log('first Argument', process.argv[2]);

// create a connection to RabbitMQ
connection = amqp.createConnection({ host: 'dev.rabbitmq.com'});

connection.on('ready', function () {

	console.log('got a ready event');

	console.log('trying to publish something...');
	connection.publish('', new Buffer('3031', 'hex'), {}, function (err) {
		console.log('after publishing we got', err);
	});

	console.log('listen for stuff');
	connection.queue('ascolatore5672', function (q) {
		// catch all messages
		q.bind('#');

		// Receive messages
		q.subscribe(function (message) {
			console.log(message);
		});
	});
});

