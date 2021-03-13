import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import Register from './Auth/Register';
import {MovieProvider} from './MovieContext';


function App() {

  return(
  <MovieProvider>
    <div className="app">
        <Nav/>
        <AddMovie />
        <Register/>
          <MovieList  />
    </div>
  </MovieProvider>
  )
  
}

export default App;
