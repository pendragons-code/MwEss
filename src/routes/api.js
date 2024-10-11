const essenceSheet = require("../../JSON/essence.json");
const infBlockSheet = require("../../JSON/infinityBlocks.json");
const express = require("express");
const router = express.Router();



// lookup-ess - looks up for specified essence
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

// lookup-inf-block - looks up for specified block
router.get("/lookup-infBlock", async (req, res) => {
	try {
		const { infBlock } = req.body;
		if (!infBlock) return res.status(400).json({ error: "Missing fields" });

		if(infBlock.includes("stair") || infBlock.includes("slab") || infBlock.includes("wall") || infBlock.includes("fence")) return res.status(500).json({ result: "All slabs and stairs go for around 20-32 deggs. All walls go for around 15-25 deggs." });

		let result = infBlockSheet[`${infBlock.toLowerCase().trim()}`];
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
			"DJX-Patchika": "https://docs.google.com/spreadsheets/d/1oQQdgtUN_ew87snt1bE3UBAmUBDESP96eShynjfpbj8/edit?gid=0#gid=0",
			"christieBot": "https://docs.google.com/spreadsheets/d/1NreN_qK0pZ0KrREBt6c8M3P5o0c7qjcmf53OPgyYBcA/edit?gid=0#gid=0",
			"tatatot234": "https://docs.google.com/spreadsheets/d/12CYgW-9DA6b-6k7qpEpmE496k8kP6t7B_9cTo85D1RU/edit?gid=809036244#gid=809036244"
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});



module.exports = router;
