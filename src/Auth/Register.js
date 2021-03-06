import React, {useContext, useRef, useState} from 'react';
 import {Form, Button, Card, Alert} from 'react-bootstrap';
 import {Link } from 'react-router-dom';
 import {useAuth} from '../Context/AuthContext';

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
   // const { currentUser} = useAuth();
 const {signUp} = useAuth();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
    function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
            try{
                setError('');
                setLoading(true);
               signUp(emailRef.current.value, passwordRef.current.value)
            }catch{
                setError('Failed to create an account')
            } 
            setLoading(false)
    }

    return (
        <>
    <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Sign up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
        </Form.Group>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
        </Form.Group>

        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
        </Form.Group>
        <Button disabled={loading} className="w-100" type="submit">Sign up</Button>

        </Form>
        </Card.Body>
    </Card> 
    <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log in</Link>
    </div>
    </>
    );
}

export default Register;