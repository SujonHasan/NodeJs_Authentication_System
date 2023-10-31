const authenticate = require("../Core/middlewares/authenticate");
const validate = require("../Core/middlewares/validate");
const { createrUser, login, getUser } = require("./user.controller");
const { createrUserSchema } = require("./user.schema");

function userRoutes(app){

    app.route('/registor')
        .post(validate(createrUserSchema) ,createrUser);
    
    app.route('/login')
        .post(login);

    app.route('/user')
        .get(authenticate ,getUser);

    app.get('/', authenticate, (req, res) =>{
        res.send('Hello server is running')
    })
}

module.exports = {userRoutes};