import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{name, img } = service;
    return (
        <div>
            <div id="services">
            <Container>
            <div>
           <Col>
     <Card className="service-card">
       <Card.Img variant="top" src={img} style={{height:'20rem'}}  fluid/>
       <Card.Body>
         <Card.Title className="card-title">{name}</Card.Title>

         <Link to={`/register/${name}`}>
         <Button className="detail-button">Book Here <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
         </Link>
         </Card.Body>
     </Card>
   </Col>
       </div>
        </Container>
        </div>
        </div>
    );
};

export default Service;