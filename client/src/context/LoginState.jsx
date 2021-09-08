import { createContext, useState } from 'react';

export const LoginContext  = createContext(null);

const LoginState = ({children}) =>{
    const [account,setaccount]  = useState('');

    return (
        <LoginContext.Provider value = {{account,setaccount}}>
        {children}
        </LoginContext.Provider>
    );
}

export default LoginState;