import { createContext, useContext } from 'react';
import { api } from '../service/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    async function singIn({ email, password }){

        try{
            const response = await api.post('/sessions', { email, password});
            console.log(response);
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                aler("Não foi possível entrar.")
            }
        }
     
    }
    
    
    return(
        <AuthContext.Provider value ={{email: 'rodrigo@email.com'}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}