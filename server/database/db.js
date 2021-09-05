import mongoose from 'mongoose'

const connection = async () =>{
    const URL = 'mongodb+srv://kevin:kevin@insurance.jsuqw.mongodb.net/INSURANCE?retryWrites=true&w=majority';
    try{    
        await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false});
        console.log('Databse connected successfully');
    }
    catch (error){
        console.log('Error: ',error.message);
    }
}

export default connection;
