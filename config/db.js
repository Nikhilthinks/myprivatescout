const mongoose = require('mongoose');
const config = require('config')
const db = config.get('MongoURI')

const connectDB = async () => {

    try {

        await mongoose.connect(db, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify: true} );
        console.log('Connection with Database has been established successfully');

    }
    catch(err) {

        console.error(err.message);
        process.exit(1)
    }
}
module.exports = connectDB;