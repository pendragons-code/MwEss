const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const { resolve, join } = require("path");
const rateLimitConfig = require("../configs/rateLimit.js");
const essenceJSON = require("../JSON/essence.json");
require("dotenv").config();



// database
const { QuickDB } = require("quick.db");
global.db = new QuickDB({ filePath: "database/DATABASE.sqlite" });



// constants
const app = express();
const PORT = process.env.PORT;



//middlewares
app.set("view engine", "ejs");
app.set("views", resolve("./client/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimitConfig);



// routes
app.use("/", require("./routes/client.js"));
app.use("/api", require("./routes/api.js"));

// this needs to be here 
app.use("/", expressStaticGzip(join(__dirname, "../client/public"), { //OMG i love this so much
	enableBrotli: true,
	orderPreference: ["br", "gzip"],
	cacheControl: true,
	immutable: true,
	maxAge: "30d"
}));

// 404
app.use(function (req, res) {
	res.send("🍌 Error 404.");
});



app.listen(PORT, async (error) => {
	console.log(`App is on http://localhost:${PORT}`);
	await db.set("ItemCatalogue", Object.keys(essenceJSON).length);
	if (error) return console.error(error);
});
