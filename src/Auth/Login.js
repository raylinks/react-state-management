import React, {useContext, useRef, useState} from 'react';
 import {Form, Button, Card, Alert} from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
    function handleSubmit(e){
        e.preventDefault()
      
            try{
                setError('');
                setLoading(true);
             //   signup(emailRef.current.value, passwordRef.current.value)
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
    </>
    );
}

export default Login;