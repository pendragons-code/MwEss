const infRaw = require("../JSON/infRaw.json");

infRaw.main.map((block) => {
	if(block.name == null) return;
	console.log(`"${block.name.toLowerCase().trim()}": "${block.price}",`)
});