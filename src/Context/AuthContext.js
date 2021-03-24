import React, { useContext, useState } from 'react';
import {axios} from '../utils/https';
import UrlService from '../services/UrlService';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(); 

  
    const user = {
        name: '',
        email:'',
        password:''
    };

    async function signUp(name,email,password){
        try{
            const response = await axios.post("/auth/register", { name: 'mm',
            email:'mm@gmail.com',
            password:'11111'}
            ).then(response => {
                //console.log(response)
                return response.data;
            }).catch(error => {  console.log(error)});
        
        }catch (error){
            console.error('Error', error.response);
            return false;
        }
    }
    function login(email,password){
        // return auth.
     }
     function logout(){
         //
     }

     function resetPassword(email){
         ///
     }




    const value = {
        currentUser,
        signUp
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
