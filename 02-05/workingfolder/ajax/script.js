function loadAJAX() {
	const request = new XMLHttpRequest();

	request.open('GET', 'data.json');

	request.onreadystatechange = function () {
		if ((request.readyState === 4) && (request.status === 200)) {
			const items = JSON.parse(request.responseText);
			let output = '<ul>';
			for (const key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	}

	request.send();
}
document.querySelector('#load').addEventListener('click', loadAJAX)
