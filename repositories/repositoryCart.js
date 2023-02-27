import { Cart } from "../models/Cart.js";

export class CartList{
    #cartDao
    constructor( cartDao ){
        this.#cartDao = cartDao
    }
    async create( cart ){
        const cartDto = cart.dto()
        await this.#cartDao.saveObject( cartDto )
    }
    async empty( id ){
        await this.#cartDao.updateObject({ id, products: [] })
        return await this.#cartDao.getObjectByField("id", id)
    }
    async getCart( idUser ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idUser )
        return new Cart(cartDto)
    }
    async addProduct( idCart, idProduct ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idCart )
        const cartProducts = cartDto.products.map( dto => dto.id )
        if( cartProducts.includes( idProduct ) ){
            cartDto.products = cartDto.products.map( product => {
                return product.id === idProduct ? { ...product, quantity: ++product.quantity } : product     
            })
        }else{
            cartDto.products.push( { id: idProduct, quantity: 1 } )
        }
        await this.#cartDao.updateObject( cartDto );
    }
    async deleteProduct( idCart, idProduct ){
        const cartDto = await this.#cartDao.getObjectByField( "id", idCart )
        const newCartProducts = cartDto.products.filter( product => product.id !== idProduct )
        await this.#cartDao.updateObject({ id: idClient, products: newCartProducts })
    }
}