import mongoose from 'mongoose';

const user = mongoose.Schema({
    phone :{
        type : String,
        require : true,
        min : 10,
        max : 10 
    },

    password:{
        type : String,
        require : true,
        min : 6,
        max: 20
    }

});

const User = mongoose.model('User',user);

export default User;