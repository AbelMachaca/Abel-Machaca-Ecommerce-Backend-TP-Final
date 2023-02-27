export class MemoryContainer{
    #data
    constructor(){
        this.#data = []
    }
    async getObjects(){
        return this.#data
    }
    async getObjectByField( field, value ){
        const object = this.#data.find( object => object[field] === value )
        if(!object) throw new Error("NOT_FOUND")
        return object
    }
    async saveObject( object ){
        const objectExist = this.#data.includes( object )
        if(objectExist) throw new Error(`Existe un objeto con estas caracteristicas: ${object}, ingrese otro`)
        this.#data.push(object)
    }
    async updateObject( newObject ){
        const newData = this.#data.map( object => object.id === newObject.id ? newObject : object )
        if( JSON.stringify(this.#data) === JSON.stringify(newData) ) throw new Error(`No se encontró objeto para actualizar con el id ${newObject.id}`)
        this.#data = newData
    }
    async deleteObject( idObject ){
        const position = this.#data.findIndex( object => object.id === idObject )
        if( position === -1 ) throw new Error(`No se encontró objeto con id: ${idObject}`)
        this.#data.splice(position, 1)
    }
}