import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Nav from './Nav';
import Register from './Auth/Register';
import Login from './Auth/Login';
import UpdateProfile from './Auth/UpdateProfile'
import Dashboard from './Auth/Dashboard';
import ForgotPassword from './Auth/ForgotPassword';
import PrivateRoute from './Auth/PrivateRoute'

import {MovieProvider} from './MovieContext';
import {Container} from 'react-bootstrap'
import { AuthProvider } from './Context/AuthContext'; 
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
 

function App() {

  return(
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}>
     
        <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/update-profile" component={UpdateProfile} />
        </Switch>
      
      </AuthProvider>
        </Router>
        </div>
        </Container>
 </>
       
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
