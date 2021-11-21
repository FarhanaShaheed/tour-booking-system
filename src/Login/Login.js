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
            <h2 className="login">Login Here</h2>
            <Button className="mt-5" onClick={handleGoogleLogin}>Google Sign In</Button>
            <img className="google-img" src="https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2011/11/14/1321289731486/Google-logo-007.jpg" alt="" />
            
        </Container>
    );
};

export default Login;