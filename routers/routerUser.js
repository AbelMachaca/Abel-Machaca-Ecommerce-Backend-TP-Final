import { Router } from "express"
import { userAuth } from "../middlewares/userAuth.js"

import { 
    userFailController, 
    userSuccessfulController
} from "../controllers/userController.js"

const user = new Router()
// controllers
user.post("/", userAuth, userSuccessfulController) 
user.get("/fail", userFailController)

export default user