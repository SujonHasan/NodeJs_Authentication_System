const express = require('express');
const { userRoutes } = require('../../modules/user/user.routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = () =>{

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(cookieParser(process.env.COOKIE_SECRET));
    userRoutes(app);
    app.set('port', process.env.PORT);

    return app;
}