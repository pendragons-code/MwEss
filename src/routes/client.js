const express = require("express");
const router = express.Router();



// front end routes

// root
router.get("/", async (req, res) => {
	try {
		let requestsServed = await db.get("SuccessfulRequests") || 0;
		let itemCatalogueSize = await db.get("ItemCatalogue") || 0;
		res.status(200).render("index", { requestsServed, itemCatalogueSize });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

// dev
router.get("/dev", (req, res) => {
	try {
		res.status(200).render("dev");
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});



module.exports = router;
