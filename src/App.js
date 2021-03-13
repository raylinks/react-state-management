import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import Register from './Auth/Register';
import {MovieProvider} from './MovieContext';
import {Container} from 'react-bootstrap'


function App() {

  return(
  <MovieProvider>
    <div className="app">
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Register/>
        </div>
       
        <AddMovie />
        <Nav/>
          <MovieList  />
          </Container>
    </div>
  </MovieProvider>
  )
  
}

export default App;
