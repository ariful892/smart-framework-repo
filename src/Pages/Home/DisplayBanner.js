import React from 'react';

const DisplayBanner = () => {
    return (
        <div className="hero min-h-screen  w-full mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="w-50 rounded-lg shadow-2xl" alt='' />
                <div className='w-3/4'>
                    <h1 className="text-5xl font-bold">Welcome to Smart Framework!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayBanner;