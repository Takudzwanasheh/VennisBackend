const express = require("express");
const router = express.Router();
const { VennisStones } = require("../models");

router.get("/", async (req, res) => {
	const listOfPosts = await VennisStones.findAll();
	res.json(listOfPosts);
});

router.post("/", async (req, res) => {
	const stone = req.body;
	const createdStone = await VennisStones.create(stone);
	res.json(createdStone);
});

module.exports = router;
