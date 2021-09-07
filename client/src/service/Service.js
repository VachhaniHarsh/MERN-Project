import axios from 'axios';

const url = 'http://localhost:4000/api';

export const  authenticateSignup = async (user)=>{
    try{
        return await axios.post(`${url}/signup`,user)
    }
    catch(error){
        console.log('Error while calling SignUp API', error);
    }
}

export const  authenticateUserLogin = async (user)=>{
    try{
        return await axios.post(`${url}/login`,user)
    }
    catch(error){
        console.log('Error while calling Login API', error);
    }
}