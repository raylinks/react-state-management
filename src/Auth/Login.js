import React, {useContext} from 'react';
 import {MovieContext} from './MovieContext';

const Login = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return (
    <div>
        <h3>Login form</h3>
    </div> 
    );
}

export default Login;