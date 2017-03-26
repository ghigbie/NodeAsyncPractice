// const yargs = require("yargs");

// const geocode = require("./geocode/geocode");

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: "address",
// 			describe: "Address that is needed to fetch weather",
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias("help", "h")
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if(errorMessage){
// 		console.log(errorMessage);
// 	}else{
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// 

const request = require("request");

var apiKey = "9f6325a874ba4e46242d3e5e3c349a27";
var lat = "37.8267";
var lng = "-122.4233";

var ulrDarkSky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

request({
		url: ulrDarkSky,
		json: true
	},(error, response, body) => {
			console.log(body.currently.temperature);
	});



