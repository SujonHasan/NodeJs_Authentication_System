
function init() {
    const config = require("./src/config/index");
    config.initEnvironmentSetUp();

    const sequelize = require('./src/config/lib/sequelize');

    sequelize
        .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME} `)
        .then(() => {
            require('./src/modules/user/user.model');
            sequelize 
                .sync()
                .then(() => {
                    console.log("DB seed completed");
                })
                .catch((err) => {
                    console.log(`create database error =========  ${err} `);
                })
        })
        .catch((error) => {
            console.log("datbase error = ..................... " ,error);
        })
}

init();
