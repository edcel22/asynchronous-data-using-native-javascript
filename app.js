// created a function to wrap the codes inside it, to be more reuseable
const getTodos = (resource,callback) => {


	return new Promise((resolve, reject) => {
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
				resolve(data)
			} else if (request.readyState === 4) {
				reject("error getting resource")
			}
		})
	})
};

getTodos('/json/location.json').then( data => {
	console.log("promise resolved: ", data)
}).catch(err => {
	console.log(err)
})

//Promise example
// const getSomething = () => {
// 	// when use Promise first thing to do is to return new promise
// 	// promise have 2 outcome either "resolved" or "rejected will show error"
// 	//in promise we automatically get 2 parameters inside this function
// 	// resolve and reject are built in parameters for promise api
// 	return new Promise((resolve, reject) => {
// 		//fetch something
// 		// resolve('some data')
// 		reject('error')
// 	})
// }

//promise analogy saying "look im gonna do something at some point, im either resolve or reject at some point"
//getSomething()
//when we call a promise function, we can tack a .then method
//promise analogy saying "if you pass a function here, I will fire that function when we resolved the promise"
// //fires the callback function inside the then method and that callback function take the data that we pass through the resolve function
// getSomething().then((data) => {
// 	console.log(data)
// }, (err) => {
// 	console.log(err)
// })
// getSomething().then(data => {
// 	console.log(data)
// }).catch( err => {
// 	console.log(err)
// })


/*
	**NOTES***

	STATUS CODE:
		200 - means everything is okay in the request and its comeback with data
		404 - means the server cannot find the requested resource
		400 (bad request) - means that server could not understand the request due to invalid syntax.
		403 (forbidden) - means client does not have access right to the content.

		this is called callback hell nesting callback within callback within callback
		we can improved this by using a methodology called promises

*/
