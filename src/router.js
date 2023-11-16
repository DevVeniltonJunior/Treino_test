const express = require('express')
const UserController = require('./controllers/UserController')

const router = express.Router()

router.post("/users", UserController.create)
router.get("/users", UserController.findAll)
router.put("/users", UserController.update)
router.delete("/users/:id", UserController.delete)
router.get("/users/:id", UserController.findById)

module.exports = router
