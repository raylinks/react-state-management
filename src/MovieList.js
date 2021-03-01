import React, {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const MovieList = () => {
    const [movies,setMovies]  = useContext(MovieContext);

    return (
    <div>
      
        {movies.map(bukola => (
          <Movie  motorcar={bukola.price} key={movies.id} name={bukola.name}/>
        ))
    } 
    </div> );
}

export default MovieList;