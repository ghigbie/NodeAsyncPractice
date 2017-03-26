const request = require("request");

var apiKey = "9f6325a874ba4e46242d3e5e3c349a27";
// var lat = "37.8267";
// var lng = "-122.4233";

//var ulrDarkSky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

var getWeather = (lat, lng, callback) => {
	var ulrDarkSky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
	request({
		url: ulrDarkSky,
		json: true
	},(error, response, body) => {
		if(!error && response.statusCode == "200"){
			callback(undefined, { 
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}else{
			callback("======Unable to fetch weather=======");
		}
	});
}


module.exports.getWeather = getWeather;