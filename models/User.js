import { requiredField } from "../utils/validations.js"

export class User{
    #id
    #email
    #password
    #username
    #lastname
    #image
    constructor({id, email, password, username, lastname, image}){
        this.#id = requiredField(id)
        this.#email = requiredField(email)
        this.#password = requiredField(password)
        this.#username = requiredField(username)
        this.#lastname = requiredField(lastname)
        this.#image = requiredField(image)
    }
    dto(){
        return {
            id: this.#id,
            email: this.#email,
            password: this.#password,
            username: this.#username,
            lastname: this.#lastname,
            image: this.#image
        }
    }
}