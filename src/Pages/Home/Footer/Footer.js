import './Footer.css'
import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='container footer-div bg-shadow mt-5 d-flex justify-content-between align-items-center'>
            <div className='footer'>| &copy; {year} mdAhasanuzzaman</div>
            {/*/////////////////SOCIAL LINKS///////////////*/}
            <div className='socialLinks-div mb-4'>
                <a className='socialLink' href="https://www.linkedin.com/in/tanvir-ehsan60" target='_blank'><GrLinkedinOption></GrLinkedinOption></a>
                <a className='socialLink' href="https://github.com/EHSANJiSHAD" target='_blank'><VscGithub></VscGithub></a>
                <a className='socialLink' href="https://www.facebook.com/tanvir.ehsan.60/" target='_blank'><FaFacebookF></FaFacebookF></a>
            </div>
            {/*/////////////////SOCIAL LINKS///////////////*/}
        </div>
    );
};

export default Footer;