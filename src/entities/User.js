'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class User extends Model {}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			role: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	)

	return User
}
