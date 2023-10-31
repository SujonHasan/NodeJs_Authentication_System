const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) =>{

    let token = null;

    if(req && req.headers.authorization){

        token = req.headers.authorization.split(' ')[1];
        if(!token) return res.status(401).send("Authentication Faild");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{

        // console.log("err = ", err);
        if(err) return res.status(401).send("Invalid Token");

        req.user = decoded;
        // console.log("decoded = ", req.user);
        next();
    })
}

module.exports = authenticate;