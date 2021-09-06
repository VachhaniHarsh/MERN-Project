import mongoose from 'mongoose';

const user = mongoose.Schema({
    phone :{
        type : String,
        require : true,
        min : 9,
        max : 11
    },

    password:{
        type : String,
        require : true,
        min : 5,
        max : 20
    }

});

const User = mongoose.model('User',user);

export default User;