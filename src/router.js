import { Router } from "express"
import UserController from "./controllers/UserController"

const router = Router()

router.post("/users", UserController.create)
router.get("/users", UserController.findAll)
router.put("/users", UserController.update)
router.delete("/users", UserController.delete)
router.get("/users/:id", UserController.findById)

export default router
