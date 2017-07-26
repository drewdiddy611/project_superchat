$(_pageInit);

function _pageInit() {
	// Connect to our backend.
	const socket = io.connect('http://localhost:3000');

	// Assign event handlers.
	socket.on('message_sent', data => {
		document.write(data.body);
	});

	socket.emit('send_message', {
		body: 'A seriouisly cool message',
		user_id: 0,
		room_id: 0
	});
}
