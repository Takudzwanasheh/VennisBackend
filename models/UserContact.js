module.exports = (sequelize, DataTypes) => {
	const UserContact = sequelize.define("UserContact", {
		Username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Message: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	return UserContact;
};
