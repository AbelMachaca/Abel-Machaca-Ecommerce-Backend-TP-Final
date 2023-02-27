import express from "express"

import cart from "../routers/routerCart.js";
import products from "../routers/routerProducts.js"
import user from "../routers/routerUser.js";
import login from "../routers/routerLogin.js";

import { errorHandler } from "../middlewares/errorHanding.js";
import { sessionHandler as session } from "../middlewares/session.js";
import { passportMiddleware, passportSessionHandler } from "../middlewares/passport.js";
import { ecommerce } from "../services/index.js";
import error from "../routers/routerError.js";

const app = express()
// Middlewares
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )
app.use( session )
app.use( passportMiddleware )
app.use( passportSessionHandler )
// Routers
app.use("/api/products", products)
app.use("/api/shoppingcartproducts", cart)
app.use("/api/users", user)
app.use("/login", login)
function impress(req, res, next){
    console.log("Entra aca")
    next()
}
app.get("/", impress ,async (req, res) => {
    const users = await ecommerce.getUsers()
    res.send(users)
});

app.use(errorHandler)
app.use("*", error)

export default app;