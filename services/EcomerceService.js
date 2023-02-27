import { User } from "../models/User.js";
import { Cart } from "../models/Cart.js";
import Id from "../models/Id.js"

export class Ecommerce{
    #userList
    #cartList
    #productList
    constructor(userList, cartList, productList){
        this.#userList = userList
        this.#cartList = cartList
        this.#productList = productList
    }
    async registerUser( user ){
        const id = Id.crearId()
        await this.#userList.add( new User({ id, ...user }) )
        await this.#cartList.create( new Cart({ id, products: [] }) )
        return id
    }
    async authenticate(userName, password){
        let user 
        try{
            user = await this.#userList.getByField( "username", userName )
        } catch (error) {
            throw new Error("Error de autenticacion")
        }
        if(user.password !== password) throw new Error("Error de autenticacion")
        return user
    }
    async getUserByName( username ){
        const user = await this.#userList.getByField( "username", username )
        return user.dto()
    }
    async getUserById( idUser ){
        const user = await this.#userList.getByField( "id", idUser )
        return user.dto()
    }
    async emptyCart( idCart ){
        return await this.#cartList.empty( idCart )
    }
    async addProductAtCart( idCart, idProduct ){
        await this.#productList.getProductByField( "id", idProduct ) 
        await this.#cartList.addProduct( idCart, idProduct ) 
    }
    async getProductsAtCart( idUser ){
        const cart = await this.#cartList.getCart( idUser )
        const productsIds = cart.dto().products.map( product => product.id )
        const products = await this.#productList.getProductsByIds( productsIds )
        return products.map( product => product.dto() )
    }
    async deleteProductAtCart( idCart, idProduct ){
        await this.#productList.getProductByField( "id", idProduct ) 
        await this.#cartList.deleteProduct( idCart, idProduct )
    }
    async getUsers(){
        const users = await this.#userList.list()
        return users.map( user => user.dto() )
    }
}