/*the code is working but this should be hosted on a server to load the local json files
*/


// created a function to wrap the codes inside it, to be more reuseable
const getTodos = (resource,callback) => {
	//create an object to handle the request
	const request = new XMLHttpRequest()


	/*setup the request method and  endpoint on where to get the data and where to send the request*/
	request.open('GET', resource)
	// send the request
	request.send()


	//get the data on the last state of request using event listener
	request.addEventListener('readystatechange', () => {
		// request 4 means the request is complete so we will display the request data
		if(request.readyState === 4 && request.status === 200) {
			//convert json into javascript objects
			const data = JSON.parse(request.responseText)
			callback(undefined, data)
		} else if (request.readyState === 4) {
			callback('could not fetch data', undefined)
		}
	})
};

// we get the data from the location json
getTodos('/json/location.json',(err, data) => {
	console.log('callback fired!')
	if(err) {
		console.log(err)
	} else {
		console.log(data)
	}
	//we get the data from the sample location after the location json is finished.
	getTodos('/json/sample.json', (err, data) => {
		if(err) {
			console.log(err)
		} else {
			console.log(data)
		}	
	})
})

/*
	STATUS CODE:
	200 - means everything is okay in the request and its comeback with data
	404 - means the server cannot find the requested resource
	400 (bad request) - means that server could not understand the request due to invalid syntax.
	403 (forbidden) - means client does not have access right to the content.
*/
/*
  this is called callback hell nesting callback within callback within callback
  we can improved this by using a methodology called promises
*/