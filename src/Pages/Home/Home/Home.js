import React from 'react';
import Packages from '../../Packages/Packages';
import MoreInfo from '../MoreInfo/MoreInfo';
import Services from '../Services/Services';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <MoreInfo></MoreInfo>
            <Packages></Packages>
        </div>
    );
};

export default Home;