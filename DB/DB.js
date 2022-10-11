const mongoose = require('mongoose')

const connectDb = () =>{
    mongoose.connect('mongodb+srv://kaydot:kaydot13@cluster0.upkpg20.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    });
    console.log('mondodb connected');
};
module.exports = connectDb
   

