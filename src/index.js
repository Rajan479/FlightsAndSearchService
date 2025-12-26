import express from 'express';
import * as dotenv from 'dotenv';
import PORT from './config/serverConfig.js';

dotenv.config();

const setUpAndStartServer =  function(){
    const app = express();
    app.listen(PORT, function ServerStarted(){
        console.log(`Server started on ${PORT}`);
    });
}

setUpAndStartServer();
