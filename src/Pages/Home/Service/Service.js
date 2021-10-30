import React from 'react';
import { Card, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
         <Button className="detail-button">View Details</Button>
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