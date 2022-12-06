import React from 'react';
import Footer from '../Shared/Footer';
import DisplayBanner from './DisplayBanner';
import DisplaySlide from './DisplaySlide';

const Home = () => {
    return (
        <div className='mt-3 z-0'>
            <DisplaySlide></DisplaySlide>
            <DisplayBanner></DisplayBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;