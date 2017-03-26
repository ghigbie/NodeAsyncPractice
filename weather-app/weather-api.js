const request = require("request");

let url = "a url"; 


request({
	url: url,
	json: true
}, (error, response, body) => {
	if(!error && response.statusCode === "200"){
		console.log(body.currently.temperature)
	}else{
		console.log("Unable to connect to weather.io server");
	}
});