import React from 'react';
import about from '../../Images/about2.jfif';
import { Image, Row, Col, Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <div>
                <Image style={{'height':'75vh', 'width':'100%'}} src={about} fluid></Image>
            </div>
            <Container>
            <div>
                <Row>
                <Col xs={12} md={6}>
               <h1 className="m-5">Hello. Our agency has been present for over 20 years. We make the best for all our customers.</h1>
              </Col>
              <Col xs={12} md={6} className="mt-5">
               <div style={{'display':'flex','color':'gray'}}>
                   <div>
                   <p>Whether you are travelling for business or pleasure, the luxury hotel services offered by the five star Grand Palace Hotel make it an ideal choice for your stay in Riga, Latvia. The hotel’s luxurious surroundings, comfort, thoughtful touches and a personalized service sets it apart from any other hotel, allowing you to feel like being at home from your very first steps into the hotel.</p>
                   </div>
                   <div>
                   <p>We are geared towards the fulfilment of the needs of any discerning guest and below you can find an alphabetical overview of the most commonly-used services and facilities offered by our boutique hotel.</p>
                   </div>
               </div>
              </Col>

                </Row>
            </div>
            <div>
                
            </div>
            </Container>
        </div>
    );
};

export default AboutUs;