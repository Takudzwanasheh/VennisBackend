const express = require("express");
const router = express.Router();

const { UserContact } = require("../models");

router.get("/contact", async (req, res) => {
	const listOfRequests = await UserContact.findAll();
	res.json(listOfRequests);
});
// Add error handling and export the router
router.post("/contact", async (req, res) => {
	try {
		const user = req.body;
		const createdUser = await UserContact.create(user);
		res.json(createdUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
