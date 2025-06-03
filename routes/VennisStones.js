const express = require("express");
const router = express.Router();
const { VennisStones } = require("../models");

router.get("/", async (req, res) => {
	const listOfPosts = await VennisStones.findAll();
	res.json(listOfPosts);
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const updatedData = req.body;
	try {
		const [updated] = await VennisStones.update(updatedData, { where: { id } });
		if (updated) {
			const updatedStone = await VennisStones.findByPk(id);
			res.json(updatedStone);
		} else {
			res.status(404).json({ error: "Stone not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Failed to update stone" });
	}
});

router.post("/", async (req, res) => {
	const stone = req.body;
	const createdStone = await VennisStones.create(stone);
	res.json(createdStone);
});

module.exports = router;
