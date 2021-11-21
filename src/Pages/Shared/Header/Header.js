import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
        <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"> <img className="header-img" src="https://thumbs.dreamstime.com/b/airplane-flat-icon-black-background-black-style-vector-illustration-airplane-flat-icon-black-background-black-style-vector-168420157.jpg" alt="" /> Tour Booking</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            {
                  user?.email && <Nav.Link as={Link} to="/myBookings">Manage Bookings</Nav.Link> 
            }
            {
                  user?.email && <Nav.Link as={Link} to="/userBookings">My Bookings</Nav.Link>
            }
            {user?.email ?
            <Button onClick={logOut} variant="light">LogOut</Button>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            {
            user?.email && <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
            }
            {
            user?.email && 
            <Navbar.Text>
            sign: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            }
            
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );
};

export default Header;