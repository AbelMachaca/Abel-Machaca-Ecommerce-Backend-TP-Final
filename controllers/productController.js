import { productManager } from "../services/index.js";

export const listProductsController = async ( req, res, next ) => {
    try{
        const productList = await productManager.getProducts()
        res.json( productList )
    } catch(error) {
        next(error)
    }
}
export const listProductByIdController = async ( req, res, next ) => {
    try{
        const product = await productManager.getProductById( req.params.id_product )
        res.json( product )
    } catch(error) {
        next(error)
    }
}
export const addProductController = async ( req, res, next ) => {
    try{
        const id = await productManager.addProduct( req.body )
        res.status(201).json( { id, ...req.body } )
    } catch(error) {
        next(error)
    }
}
export const updateProductController = async ( req, res, next ) => {
    try{
        const newProduct = { id: req.params.id_product, ...req.body }
        await productManager.updateProduct( newProduct )
        res.status(200).json( newProduct )
    } catch(error) {
        next(error)
    }
}
export const deleteProductController = async ( req, res, next ) => {
    try{
        await productManager.deleteProduct( req.params.id_product )
        const productList = await productManager.getProducts()
        res.json(productList)
    } catch(error) {
        next(error)
    }
}