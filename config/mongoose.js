//importing mongoose module
const mongoose=require('mongoose');

//connecting to the mongoDB
mongoose.connect(`mongodb+srv://adarshrajpathak:thunderthunder@cluster0-sociam.7vxhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-sociam`);

//acquring the connection
const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to db'));
db.once('open',function(){
    console.log('connected to Database:: MongoDB');
});

module.exports=db;