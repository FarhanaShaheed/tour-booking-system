import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding,faCheck,faPhone,faInbox, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';
import GoogleMap from './GoogleMap';

const Contact = () => {
    return (
        <div>
            <Container className="contact-class mt-5">
                <h2>Contact Us for Any Query</h2>
              <Row className="m-5">
              <Col xs={12} md={6} className="message-class">
               <h2>Drop us your Feedback</h2>
               <form action="">
                   <input type="text" placeholder="Name"/>
                   <br />
                   <input type="text" placeholder="Email"/>
                   <textarea placeholder="Messege" cols="30" rows="6"></textarea>
                   <br />
                   <Button>Send Us</Button>
               </form>
              </Col>
              <Col xs={12} md={6}>
                  <GoogleMap></GoogleMap>
              </Col>
              </Row>
              <div className="row d-flex align-items-center justify-content-center">
                  
                  <div className="col-sm-6">
                     <h4><FontAwesomeIcon icon={faMapMarkerAlt}/> Address: <span>Avenue 234</span></h4>
                     <h4><FontAwesomeIcon icon={faBuilding} /> City: <span>New York-US</span></h4>
                     <h4><FontAwesomeIcon icon={faCheck} /> Check-In: <span>15:00 am</span></h4>
                     
                  </div>
                  <div  className="col-sm-6">
                  <h4><FontAwesomeIcon icon={faPhone} /> Phone: <span>374765290293</span></h4>
                     <h4><FontAwesomeIcon icon={faInbox} /> Email: <span>info@travel.com</span></h4>
                     <h4><FontAwesomeIcon icon={faTimes} /> Check-Out: <span>11:00am</span></h4>
                  </div>
                  
              </div>
             
            </Container>
        </div>
    );
};

export default Contact;