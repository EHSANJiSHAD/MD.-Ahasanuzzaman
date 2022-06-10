import './Footer.css'
import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='mt-5'>
            <div>&copy; {year} mdAhasanuzzaman</div>
        </div>
    );
};

export default Footer;