import { requiredField } from "../utils/validations.js"

export class Cart{
    #id
    #products
    constructor({id, products}){
        this.#id = requiredField(id)
        this.#products = requiredField(products)
    }
    dto(){
        return{
            id: this.#id,
            products: this.#products
        }
    }
}