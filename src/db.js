import { Sequelize } from "sequelize"

const db = new Sequelize("naotem", "sa", "1234", {
  dialect: "mssql",
  host: "localhost",
  port: 1433,
})

db.sync()

export default db