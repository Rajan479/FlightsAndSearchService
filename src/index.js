const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const setUpAndStartServer =  function(){
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));

    app.listen(PORT, function ServerStarted(){
        console.log(`Server started on ${PORT}`);
    });
}

setUpAndStartServer();