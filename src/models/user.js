const sequelize = require('sequelize')
const db = require('../db')

const schema = {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
  password: {
    type: sequelize.STRING,
  },
  createdAt: {
    type: sequelize.DATE,
  },
  updatedAt: {
    type: sequelize.DATE,
    allowNull: true,
  },
}

class User extends sequelize.Model {}

User.init(schema, { sequelize: db, modelName: "users", timestamps: true })

module.exports = User
