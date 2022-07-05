	const request = new XMLHttpRequest();
	request.open('GET', 'data.txt');
	request.onreadystatechange = function () {
		// readyState 4 means fetch operation is complete
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request)
			document.writeln(request.responseText);
		}
	}
	request.send();
