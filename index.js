const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Serve static files (optional, e.g., for React build)
// app.use(express.static("public"));

// Routes
const vennisStonesRoutes = require("./routes/VennisStones");
app.use("/vennisstones", vennisStonesRoutes);

const userContactRoutes = require("./routes/UserContact");
app.use("/usercontact", userContactRoutes);

// Basic error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Something went wrong!" });
});

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
