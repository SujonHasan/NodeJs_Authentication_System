const validate = (schema) =>{

    return function (req, res, next){

        schema.validate(req.body, {abortEarly: false})
            .then(() =>{
                next()
            })
            .catch((err) =>{
                const errMsg = {path: err.inner[0].path, msg: err.inner[0].message}
                res.send(errMsg);
            })
    }
}

module.exports = validate;