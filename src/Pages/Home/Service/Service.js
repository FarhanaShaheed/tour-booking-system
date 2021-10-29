import React from 'react';
import { Card, Col, Container, Button } from 'react-bootstrap';

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

         <Button>Book Now</Button>
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