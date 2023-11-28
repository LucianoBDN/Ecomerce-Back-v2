require('dotenv').config();
const app = require('./app');
const connectDb = require('./db/mongodb');

const {appConfig,dbConfig} = require ('./config');

async function initApp(appConfig, dbConfig) {
    try{
        await connectDb(dbConfig);
        app.listen(appConfig.port,()=> console.log(`listen on ${appConfig.port}`));
    }
    catch (err) {
        console.log(`Error connecting to MongoDB: ${err}`);
        process.exit(0);
    }
}

initApp(appConfig, dbConfig) 