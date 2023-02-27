import { requiredField } from "../utils/validations.js"

export class Product {
    #id
    #name
    #description
    #image
    #price
    constructor({id, name, description, image, price}){
        this.#id = requiredField( id )
        this.#name = requiredField( name )
        this.#description = requiredField( description )
        this.#image =  requiredField( image)
        this.#price = requiredField( price )
    }
    dto(){
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            image: this.#image,
            price: this.#price
        }
    }
}