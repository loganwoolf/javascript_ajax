  const request = new XMLHttpRequest()
  request.open('GET', 'data.txt', false) // param 3 async (t/f)
  request.send()
  if (request.status === 200) {
    // console.log(request)
  }
  document.writeln(request.responseText)
