require("dotenv").config(); // Ensure this is at the top

const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routes
const vennisStonesRoutes = require("./routes/VennisStones");
app.use("/vennisstones", vennisStonesRoutes);

const userContactRoutes = require("./routes/UserContact");
app.use("/usercontact", userContactRoutes);

// Basic error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res
		.status(err.status || 500)
		.json({ error: err.message || "Something went wrong!" });
});

db.sequelize
	.sync()
	.then(() => {
		app.listen(process.env.PORT || 3001, () => {
			console.log(`Server is running on port ${process.env.PORT || 3001}`);
		});
	})
	.catch((err) => {
		console.error("Failed to sync database:", err);
	});
