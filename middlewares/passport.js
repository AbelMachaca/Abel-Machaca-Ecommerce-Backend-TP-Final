import passport from "passport"
import * as strategies from "./passportStrategies.js"
import { ecommerce } from "../services/index.js"

passport.use("register", strategies.localRegister)
passport.use("login", strategies.localLogin)

export const passportMiddleware = passport.initialize();

passport.serializeUser( (user, done) => { 
    done(null, user.id)
})
passport.deserializeUser( async (id, done) => {
    try {
        const user = await ecommerce.getUserById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export const passportSessionHandler = passport.session();