import React from 'react';
import './Banner.css';
import banner from '../../../Images/Banner/bannner.jpg';
import { Image } from 'react-bootstrap';



const Banner = () => {
    return (
      <div>
        <Image src={banner} style={{'height':'75vh', 'width':'100%'}} fluid ></Image>
        <h2 className="centered">We Make Your Tour Special </h2>
      </div>
    );
};

export default Banner;