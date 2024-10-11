const ess = require("../JSON/essence.json");

const results = ess.map((essence) => {
	if(essence.name == null) return;
	console.log(`"${essence.name.toLowerCase()}": {
		"tier": {
			"I": "${essence.I}",
			"II": "${essence.II}",
			"III": "${essence.III}",
			"IV": "${essence.IV}",
			"V": "${essence.V}"
			}
		},`)
});

// i use a plugin that helps me convert my sheets to JSON, this helps me convert that raw format to json that i need
// https://docs.google.com/spreadsheets/d/14S_7BfC2CyGnHNiiJY--GWaql4SXGqr7PkYIiZ7Ni6Q/edit?gid=0#gid=0