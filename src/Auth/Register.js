import React, {useContext} from 'react';
 import {MovieContext} from './MovieContext';

const Register = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return (
    <div>
        <h3>Register form</h3>
        <h1>TAILWIND CSS</h1>
    </div> 
    );
}

export default Register;