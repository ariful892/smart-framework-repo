import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between px-8 py-5 mt-12 bg-black text-white'>
            <p>Copyright <FontAwesomeIcon className='ms-2 me-2' icon={faCopyright}></FontAwesomeIcon> {new Date().getFullYear()}. Smart Framework All right reserved</p>
            <p>We Accepts: VISA, bkash</p>
        </div>
    );
};

export default Footer;