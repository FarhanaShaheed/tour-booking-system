import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from './../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://safe-tundra-54858.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
        {
            (services.length !== 0) ? <div className="container">
            <h2 className="services-class">Top Notch Destinations</h2>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
            }
           </Row>
        </div> : <div className='d-flex justify-content-center m-5 p-5'>
            <Spinner animation='border' varient ="danger"> </Spinner>
        </div>

        }
        </>
    );
};

export default Services;