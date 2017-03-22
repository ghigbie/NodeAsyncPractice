var getUser = (id, callback) => {
	var user = {
		id: id,
		name: "Vikram"
	};setTimeout(() => {
		callback(user);	
	}, 3000);
};

getUser(43, (userObject) => { //user comes back from a call to be used as an argument
	console.log(userObject);
});