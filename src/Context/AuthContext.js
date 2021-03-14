import React, { useContext, useState } from 'react';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(); 

    function signUp(email,password){
       // return auth.
    }
    function login(email,password){
        // return auth.
     }
     function logout(){
         //
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
