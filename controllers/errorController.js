export const errorController = (req, res) => {
    res.send( { error: -2, descripcion: `ruta ${req.url}, metodo ${req.method} no implementada` } )
}