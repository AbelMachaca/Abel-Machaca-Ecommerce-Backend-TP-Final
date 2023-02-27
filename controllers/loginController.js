import { ecommerce } from "../services/index.js"

export const loginSuccessfulController = async (req, res, next) => {
    req.session.username= req.body.username
    const user = await ecommerce.getUserByName(req.body.username)
    res.json(user)
}
export const loginFailController = (req, res, next) => {
    console.log("Error de logueo")
    res.sendStatus(404);
}