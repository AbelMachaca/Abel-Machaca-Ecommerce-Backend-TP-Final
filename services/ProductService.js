import { Product } from "../models/Product.js"
import Id from "../models/Id.js"

export class Products{
    #productList
    constructor(productList){
        this.#productList = productList
    }
    async getProducts(){
        const products = await this.#productList.list()
        return products.map( product => product.dto() )
    }
    async getProductById( id ){
        const product = await this.#productList.getProductByField( "id", id )
        return product.dto()
    }
    async addProduct( product ){
        const id = Id.crearId()
        const productInstance = new Product({ id, ...product })
        await this.#productList.add( productInstance )
        return id
    }
    async updateProduct( product ){
        const productInstance = new Product( product )
        await this.#productList.update( productInstance )
    }
    async deleteProduct( idProduct ){
        await this.#productList.deleteById( idProduct )
    }
}