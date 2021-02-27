import React, {useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';


function App() {

  return(
  <MovieProvider>
    <div className="app">
      <div className="todo-list">
        <Nav/>
        <AddMovie />
          <MovieList  />
      </div>
    </div>
    </MovieProvider>
  )
  
}

export default App;
