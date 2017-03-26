const yargs = require("yargs");

const geocode = require("./geocode/geocode"),
	  weather = require("./weather/weather");

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: "address",
			describe: "Address that is needed to fetch weather",
			string: true
		}
	})
	.help()
	.alias("help", "h")
	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if(errorMessage){
// 		console.log(errorMessage);
// 	}else{
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}

//arguments - lat, lng, callback

var lat = "37.8267";
var lng = "-122.4233";
weather.getWeather(lat, lng, (errorMessage, weatherResults) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results, undefined, 2));
	}
});
