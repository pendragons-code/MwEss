const essenceSheet = require("../../JSON/essence.json");
const express = require("express");
const router = express.Router();



// lookup - looks up for item
router.get("/lookup-ess", async (req, res) => {
	try {
		const { essence } = req.body;
		if (!essence) return res.status(400).json({ error: "Missing fields" });

		let result = essenceSheet[`${essence.toLowerCase().trim()}`];
		if (!result) return res.status(400).json({ error: "Not in database" });

		await db.add("SuccessfulRequests", 1);
		return res.json({ result });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});

// url - sends url for ess sheet
router.get("/url", async (req, res) => {
	try {

		await db.add("SuccessfulRequests", 1);
		res.status(200).json({
			"christieBot": "https://docs.google.com/spreadsheets/d/1NreN_qK0pZ0KrREBt6c8M3P5o0c7qjcmf53OPgyYBcA/edit?gid=0#gid=0",
			"tatatot234": "https://docs.google.com/spreadsheets/d/12CYgW-9DA6b-6k7qpEpmE496k8kP6t7B_9cTo85D1RU/edit?gid=809036244#gid=809036244"
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});



module.exports = router;
