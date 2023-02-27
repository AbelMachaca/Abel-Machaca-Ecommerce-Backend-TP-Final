import { ecommerce } from "../services/index.js";

export const deleteCartController = async (req, res, next) => {
    const productList = await ecommerce.emptyCart(req.params.id_cart)
    res.json( productList )
}
export const addProductAtCartController = async (req, res, next) => {
    await ecommerce.addProductAtCart(req.params.id_cart, req.body.productId)
    res.sendStatus(200)
}
export const getProductsAtCartController = async (req, res, next) => {
    const products = await ecommerce.getProductsAtCart(req.params.id_cart)
    res.json(products)
}
export const deleteProductAtCartController = async (req, res, next) => {
    await ecommerce.deleteProductAtCart(req.params.id_cart, req.params.id_prod)
    res.sendStatus(200)
}