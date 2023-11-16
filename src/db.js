const sequelize = require('sequelize')

const db = new sequelize("test", "sa", "Senha@123", {
  dialect: "mssql",
  host: "localhost",
  port: 1434,
})

console.log("syncing database ...")

db.sync()

console.log("sync finished")

module.exports = db
