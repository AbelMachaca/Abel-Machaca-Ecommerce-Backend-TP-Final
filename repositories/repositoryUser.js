import { User } from "../models/User.js"

export class UserList{
    #userDao
    constructor( userDao ){
        this.#userDao = userDao
    }
    async list(){ 
        const usersDto = await this.#userDao.getObjects()
        console.log(usersDto)
        return usersDto.map( dto => new User(dto) )
    }
    async getByField( field, value ){
        const userDto = await this.#userDao.getObjectByField( field, value )
        return new User( userDto )
    }
    async add( user ){
        const userDto = user.dto()
        await this.#userDao.saveObject( userDto )
    }
}