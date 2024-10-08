const axios = require("axios");

axios.request({
	method: "GET",
	url: "http://localhost:3000/api/url"
}).then((response) => {
	console.log(response.data);
});