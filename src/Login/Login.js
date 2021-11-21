import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || 'home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
           history.push(redirect_uri)
        })
    }
    return (
        <Container className="login-class">
            <h2 className="login">Login here</h2>
            <Button className="mt-5" onClick={handleGoogleLogin}>Google Sign In</Button>
        </Container>
    );
};

export default Login;