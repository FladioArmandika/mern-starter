
const express   = require('express');
const config    = require('./config');

const startServer = async() => {
    const app = express();

    await require('./loaders')(app);

    app.listen(config.port, err => {
        if (err) {
            console.log("error");
            return;
        }

        console.log(`Server listening on port : ${config.port}`);
        
    });
}

startServer();