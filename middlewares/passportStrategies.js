import { Strategy } from "passport-local"
import { ecommerce } from "../services/index.js"

export const localRegister = new Strategy(
    {
        passReqToCallback: true,
    },
    async (req, username, password, done) => {
        try{
            const id = await ecommerce.registerUser(req.body)
            const user = await ecommerce.getUserById(id)
            done(null, user)
        } catch (error) {
            done(null, false, error)
        }
    }
)

export const localLogin = new Strategy(
    async ( username, password, done ) => {
        try{
            done(null, await ecommerce.authenticate(username, password))
        } catch (error) {
            done(null, false, error)
        }
    } 
)