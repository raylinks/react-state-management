import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext, MovuieContext} from './MovieContext';

const MovieList = () => {
    const value  =useContext(MovieContext);

    return (
    <div>
        <h1> {value}</h1>
        {/* {movies.map(bukola => (
          <Movie  motorcar={bukola.price} key={movies.id} name={bukola.name}/>
        ))
    } */}
    </div> );
}

export default MovieList;