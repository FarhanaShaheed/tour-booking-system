import React from 'react';
import { Button } from 'react-bootstrap';
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
        <div className="login-class">
            <h2>You can Login here Using Your Google Account</h2>
            <Button onClick={handleGoogleLogin}>Google Sign In</Button>
        </div>
    );
};

export default Login;