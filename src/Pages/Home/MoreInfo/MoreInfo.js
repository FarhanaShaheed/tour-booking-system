import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../Images/Banner/blog-post-img-01.jpg';
import blog2 from '../../../Images/Banner/blog-post-img-02.jpg';

const MoreInfo = () => {
    return (
        <div className="m-5">
            <h2 className="m-5">Travel Essentials Tips</h2>
            <Container>
            <Row>
              <Col xs={12} md={6}>
                  <img style={{width:'100%'}} src={blog1} alt="" fluid/>
              </Col>
              <Col xs={12} md={6}>
               <h2 className="m-5">MOVING THROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY</h2>
               <p>Patience is my top travel tip. Don’t sweat the stuff you can’t control. Life is much too short to be angry & annoyed all the time while traveling. Did you miss your bus? No worries, there will be another one.</p>
              </Col>
              </Row>
              <Row className="m-5">
              <Col xs={12} md={6}>
               <h2 className="m-5">TOP HIKING TRAILS IN THE PERUVIAN AMAZON RAIN FOREST</h2>
               <p>If you really want to get a feel for the pulse of a place, one of my favorite travel tips is to spend a few hours sitting in a park or on a busy street corner by yourself just watching day to day life happen in front of you.</p>
              </Col>
              <Col xs={12} md={6}>
                  <img style={{width:'100%'}} src={blog2} alt="" fluid/>
              </Col>
              </Row>
            </Container>

        </div>
    );
};

export default MoreInfo;