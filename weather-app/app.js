const request = require("request");
const yargs = require("yargs");

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

console.log(argv);

//request will take two arguments  //the first argument is an options object and the secodn is a callback that gets called when json comes back from api
request({
	url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
	json: true
}, (error, response, body) => {  
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});