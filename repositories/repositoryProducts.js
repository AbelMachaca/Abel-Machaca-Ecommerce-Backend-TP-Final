import { Product } from "../models/Product.js";

export class ProductList{
    #productDao
    constructor( producDao ){
        this.#productDao = producDao
    }
    async list(){
        const productsDto = await this.#productDao.getObjects()
        return productsDto.map( dto => new Product(dto) )
    }
    async getProductByField( field, value ){
        const productDto = await this.#productDao.getObjectByField( field, value )
        return new Product( productDto )
    }
    async add( product ){
        const productDto = product.dto()
        await this.#productDao.saveObject( productDto )
    }
    async update( product ){
        const productDto = product.dto()
        await this.#productDao.updateObject( productDto )
    }
    async deleteById( idProduct ){
        await this.#productDao.deleteObject( idProduct )
    }
    async getProductsByIds( values ){
        const productsDto = await this.#productDao.getObjects()
        return productsDto.map( dto => values.includes(dto.id) && new Product(dto) )
    }
}