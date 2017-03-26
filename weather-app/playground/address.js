const request = require("request"),
	  yargs   = require("yargs");


const argv = yargs
	.options({
		a: {
			demand: true,
			alias: address,
			describe: "Provide address",
			string: true
		}

})
	.help()
	.alias("help", "h")
	.argv;

console.log(argv);


