import React from 'react';
import { Carousel} from 'react-bootstrap';
import './Banner.css';
import firstbanner from '../../../Images/Banner/Banner1.jfif'
import secondbanner from '../../../Images/Banner/Banner2.jfif'
import thirdbanner from '../../../Images/Banner/Banner3.jfif'

const Banner = () => {
    return (
        
            <div>
            <Carousel>
  <Carousel.Item className="banner-img">
    <img 
      className="d-block w-100"
      src={firstbanner}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondbanner}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdbanner}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;