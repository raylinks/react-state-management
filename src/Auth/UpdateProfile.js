import React, {useContext, useRef, useState} from 'react';
 import {Form, Button, Card, Alert} from 'react-bootstrap';
 import {Link ,useHistory} from 'react-router-dom'

const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
   // const { currentUser} = useAuth();
   const history = useHistory();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
    function handleSubmit(e){
        e.preventDefault()
       
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
           const promises = []
           setLoading(true);
           setError('');
        //    if(emailRef.current.value !== currentUser.email){
        //        promises.push(UpdateEmail(emailRef.current.value))
        //    }
           promises.all(promises).then(() => {
               history.push('/')
           }).catch(() => {
               setError('Failed to update profile')
           }).finally(() =>{
               setLoading(false)
           })
    }

    return (
        <>
    <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Update Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required defaultValue />
        </Form.Group>

        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Leave blank to keep the same" ref={passwordRef}  />
        </Form.Group>
        <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="email" placeholder="Leave blank to keep the same" ref={passwordConfirmRef}  />
        </Form.Group>
        <Button disabled={loading} className="w-100" type="submit">Update</Button>

        </Form>
        </Card.Body>
    </Card> 
    <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Cancel</Link>
    </div>
    </>
    );
}

export default UpdateProfile;