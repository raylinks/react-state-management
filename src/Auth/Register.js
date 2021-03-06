import React, {useContext} from 'react';
 import {MovieContext} from './MovieContext';

const Register = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return (
    <div>
        <h3>Register form</h3>
    </div> 
    );
}

export default Register;