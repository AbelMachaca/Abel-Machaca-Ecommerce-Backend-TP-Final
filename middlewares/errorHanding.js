export function errorHandler(err, req, res, next) {
    if(err.message === "NOT_FOUND") res.status(404)
    else if(err.message === "MISSING_REQUIRED_PARAM") res.status(400)
    else res.status(500)
    res.json({ msg: err.message })
}