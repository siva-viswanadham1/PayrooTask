const mongoose=require('mongoose')

const mongo_Url=process.env.mongoUrl 
//console.log('MongoDB URL:', mongo_Url);

mongoose.connect(mongo_Url);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('db connected');
});

connection.on('error', (err) => {
    console.error('Error connecting to database:', err);
});