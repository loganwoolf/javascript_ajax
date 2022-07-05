var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		const items = JSON.parse(request.responseText)
		console.log( items )
		const ul = document.createElement('ul')
		items.forEach(item => {
			console.log( item )
			const li = document.createElement('li')
			li.textContent = item.name
			ul.appendChild(li)
		})
		document.querySelector('#update').appendChild(ul)
	}
}
request.send();
