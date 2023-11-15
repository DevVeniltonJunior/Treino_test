import { Sequelize } from "sequelize"
import db from "../db"

const schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}

class User extends Sequelize.Model {}

User.init(schema, { sequelize: db, modelName: "users", timestamps: true })

export default User
