module.exports.start = ()=>{

    const app = require('./express')();

    app.listen(app.get('port'), ()=>{
        console.log(`Server Running Listening port is ${app.get('port')}`);
    })
} 
