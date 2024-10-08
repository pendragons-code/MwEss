const axios = require("axios");

axios.request({
	method: "GET",
	url: "http://localhost:3000/api/lookup-ess",
	data: {
		essence: "fatal strike"
	}
}).then((response) => {
	console.log(response.data);
});