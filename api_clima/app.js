$.ajax ({
	url: 'https://api.darksky.net/forecast/6f3904234b64a9333355327168b9b104/40.7308619,-73.9871558',
	method: 'GET'
}).then(function (data) {
	console.log(data);
})