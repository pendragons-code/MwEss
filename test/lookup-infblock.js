const axios = require("axios");

axios.request({
	method: "GET",
	url: "http://localhost:3000/api/lookup-infblock",
	data: {
		infBlock: "reinforced deepslate"
	}
}).then((response) => {
	console.log(response.data);
});