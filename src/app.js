import { Express } from "express"
import router from "./router"

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use("/", router)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
