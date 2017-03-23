const request = require("request");

//request will take two arguments  //the first argument is an options object and the secodn is a callback that gets called when json comes back from api
request({
	url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
	json: true
}, (error, response, body) => {  
	console.log(JSON.stringify(body, undefined, 2));
});