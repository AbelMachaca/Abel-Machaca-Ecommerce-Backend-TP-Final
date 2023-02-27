const admins = [ "Abel", "Marian" ]

export function checkAdmin(req, res, next){
    if( admins.includes(req.session.username) ){
        next()
    }else{
        res.send( { error: -1, descripcion: `ruta ${req.url}, metodo ${req.method} no autorizado` } );
    }
}