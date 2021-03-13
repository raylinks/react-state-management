import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import Register from './Auth/Register';
import {MovieProvider} from './MovieContext';
import {Container} from 'react-bootstrap'
import { AuthProvider } from './Context/AuthContext';


function App() {

  return(
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
        <Register/>
        </div>
        </Container>
    </AuthProvider>
       
  //      <MovieProvider>
  //   <div className="app">
  //       <AddMovie />
  //       <Nav/>
  //         <MovieList  />
         
  //   </div>
  // </MovieProvider>
  )
  
}

export default App;
