import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding,faCheck,faPhone,faInbox, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Button } from 'react-bootstrap';
import googleMap from '../../Images/google-map.jfif';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Container className="contact-class">
        
              <Row className="m-5">
              <Col xs={12} md={6}>
               <h2>Drop us a line</h2>
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
                  <img style={{width:'100%'}} src={googleMap} alt="" fluid/>
              </Col>
              </Row>
              <div className="address-class">
                  
                  <div>
                     <h3><FontAwesomeIcon icon={faMapMarkerAlt}/> Address: <span>Avenue 234</span></h3>
                     <h3><FontAwesomeIcon icon={faBuilding} /> City: <span>New York-US</span></h3>
                     <h3><FontAwesomeIcon icon={faCheck} /> Check-In: <span>15:00 am</span></h3>
                     
                  </div>
                  <div>
                  <h3><FontAwesomeIcon icon={faPhone} /> Phone: <span>374765290293</span></h3>
                     <h3><FontAwesomeIcon icon={faInbox} /> Email: <span>info@travel.com</span></h3>
                     <h3><FontAwesomeIcon icon={faTimes} /> Check-Out: <span>11:00am</span></h3>
                  </div>
                  
              </div>
            </Container>
        </div>
    );
};

export default Contact;