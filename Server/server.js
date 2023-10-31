(function(){

    const app = require('./src/config/lib/app');
    const config = require('./src/config/index');
    
    config.initEnvironmentSetUp();
    app.start();

})();