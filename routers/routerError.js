import { Router } from "express"
import { errorController } from "../controllers/errorController.js"

const error = new Router()

error.all("/", errorController)

export default error