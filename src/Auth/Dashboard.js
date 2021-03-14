import React, {useState} from 'react'
import {Button, Card, Alert} from 'react-bootstrap';
import {useAuth} from '../Context/AuthContext';
import {Link , useHistory} from 'react-router-dom'

const Dashboard = () => {
    const [error, setError] = useState();
    const history = useHistory();


    function handleLogout(){
        setError('')

        try{
           // await logout()
            history.pushState('/login')
        }catch{
            setError('Failed to logout')
        }
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong>
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log out</Button>
        </div>
        </>     
    )
}

export default Dashboard