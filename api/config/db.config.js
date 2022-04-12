const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

/**
 * 
 */
const connection = () => {
    const url = process.env.MONGO_CONNECTION_STRING;
    logger.info("process.env.MONGO_CONNECTION_STRING :::" + process.env.MONGO_CONNECTION_STRING);

    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    mongoose.connection.once('open', async () => {
        logger.info("Connected to database");
    });

    mongoose.connection.on('error', (err) => {
        logger.error("Error connecting to database  ", err);
    });
}

/**
 * Function to disconnect from the mongodb server after all the operations
 */
const disconnection = () => {
    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();
    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });
};

module.exports = {
    connection,
    disconnection
};