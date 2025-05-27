const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

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

// Sync database and start server
db.sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Database connection error:", err);
		process.exit(1); // Exit the application if the database connection fails
	});
