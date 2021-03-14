import React, {useContext, useRef, useState} from 'react';
 import {Form, Button, Card, Alert} from 'react-bootstrap';
 import {Link , useHistory} from 'react-router-dom'
 import {useAuth} from '../Context/AuthContext';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
   
    function handleSubmit(e){
        e.preventDefault()
      
            try{ 
                setError('');
                setLoading(true);
                login(emailRef.current.value, passwordRef.current.value)
                history.push("/")
            }catch{
                setError('Failed to create an account')
            } 
            setLoading(false)
    }

    return (
        <>
    <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Login </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
        </Form.Group>

        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>

        <Button disabled={loading} className="w-100" type="submit">Login</Button>

        </Form>
        </Card.Body>
    </Card> 
    <div className="w-100 text-center mt-2">
        Need an account  ? <Link to="/register">Sign up</Link>
    </div>
    </>
    );
}

export default Login;