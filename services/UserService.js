import { User } from "../models/User.js"
import Id from "../models/Id.js"

export class Users{
    #userList
    constructor(userList){
        this.#userList = userList
    }
    async getUsers(){ 
        const users = await this.#userList.list()
        return users.map( user => user.dto() )
    }
    async getUserById( idUser ){
        const user = await this.#userList.getByField( "id", idUser )
        return user.dto()
    }
    async getUserByName( nameUser ){ 
        const user = await this.#userList.getByField( "username", nameUser )
        return user.dto()
    }
    async registerUser( user ){
        const newId = Id.crearId();
        const userInstance = new User({ id: newId, ...user })
        await this.#userList.add( userInstance )
        return userInstance.dto()
    }
    async authenticate(username, password){
        let user 
        try{
            user = await this.#userList.getByField( "username", username )
        } catch (error) {
            throw new Error("Error de autenticacion")
        }
        if(user.password !== password) throw new Error("Error de autenticacion")
        return user
    }
}