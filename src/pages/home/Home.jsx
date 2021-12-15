import React from 'react';
import InformationService from '../../components/informationservice/InformationService';
import Footerpage from '../../components/footer/Footerpage';
import './Home.css';



const Home = () => {

    return (
        <div className='home'>
            <h1>INI BODY</h1>
            <InformationService />
            <Footerpage />
        </div>
    );
};

export default Home;

