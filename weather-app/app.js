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

var encodedAddress = encodeURIComponent(argv.address);
console.log("=======================");
console.log(encodedAddress)
console.log("=======================");
//request will take two arguments  //the first argument is an options object and the secodn is a callback that gets called when json comes back from api
request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {  
	if(error){
		console.log("Unable to connect to google servers.");
	}else if(body.status === "ZERO_RESULTS"){
		console.log("Unable to find that address.");
	}else if(body.status === "OK"){
		console.log("Fethching address");
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
		console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	}
});