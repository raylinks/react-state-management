import React, {useState} from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import MovieProvider from './MovieContext';


function App() {

  return(
  
    <div className="app">
      <div className="todo-list">
        <Nav/>
          <MovieList  />
      </div>
    </div>
  )
  
}

export default App;
