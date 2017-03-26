const request = require("request"),
      yargs   = require("yargs");

const geocode = require("geocode");

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

geocode.geocodeAddress(address);


