import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
        <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">Travel Booking</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
            {user?.email ?
            <Button onClick={logOut} variant="light">LogOut</Button>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
            <Navbar.Text>
                sign: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );
};

export default Header;