import React, { useContext, useState } from 'react';
import axios from 'axios';
import UrlService from '../services/UrlService';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(); 

    //  doUserLogin(credentials: Credentials){
    //             try{
    //                 const response = await axios.post(UrlService/registerUrl(), credentials);
    //                 return response.data;
    //             }catch (error){
    //                 console.error('Error', error.response);
    //                 return false;
    //             }
    //         }
    const user = {
        name: '',
        email:'',
        password:''
    };

    async function signUp(name,email,password){
        try{
            const response = await axios.post("http://localhost:8000/api/auth/register", { name: 'mm',
            email:'mm@gmail.com',
            password:'11111'});
            return response.data;
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
