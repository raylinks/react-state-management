import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';


function App() {

  return(
  <MovieProvider>
    <div className="app">
        <Nav/>
        <AddMovie />
          <MovieList  />
    </div>
  </MovieProvider>
  )
  
}

export default App;
