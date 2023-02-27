import { Router } from "express"
import { loginAuth } from "../middlewares/loginAuth.js"

import { 
    loginSuccessfulController,
    loginFailController
} from "../controllers/loginController.js"

const login = new Router()
login.post("/", loginAuth, loginSuccessfulController)
login.get("/fail", loginFailController)

export default login