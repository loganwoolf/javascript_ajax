var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function () {
	if ((request.readyState === 4) && (request.status === 200)) {
		const ul = document.createElement('ul')
		const nameList = request.responseXML.querySelectorAll('name')
		nameList.forEach(item => {
			const li = document.createElement('li')
			li.textContent = item.textContent
			ul.appendChild(li)
		});
		document.querySelector('body').appendChild(ul)
	}
}
request.send();
