const request = require("request");


var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);
	console.log("=======================");
	console.log(encodedAddress)
	console.log("=======================");
	//request will take two arguments  //the first argument is an options object and the secodn is a callback that gets called when json comes back from api
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {  
		if(error){
			callback("Unable to connect to google servers.");
		}else if(body.status === "ZERO_RESULTS"){
			callback("Unable to find that address.");
		}else if(body.status === "OK"){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	});
}

module.exports.geocodeAddress = geocodeAddress;