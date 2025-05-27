const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "2004",
	database: "vennis",
});

module.exports = db;
