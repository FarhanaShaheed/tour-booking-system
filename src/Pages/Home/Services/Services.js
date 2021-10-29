import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <Container>
        <div id="services">
        <h2 className="mt-5 animate__animated animate__bounce">Our Services</h2>
            <p>A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease.</p>
        <Row xs={1} md={3} className="g-4">
        {
            services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
        }
       </Row>
    </div>
    </Container>
    );
};

export default Services;