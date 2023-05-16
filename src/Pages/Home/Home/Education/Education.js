import './Education.css'
import React from 'react';
import varsityLogo from '../../../../assets/images/aiub200_200.png'
import clgLogo from '../../../../assets/images/Morogram_of_RAJUK_Uttara_Model_College.svg.png'
import Typewriter from 'typewriter-effect';
const Education = () => {
    return (
        <div id='education' className='container  education-container'>
            <h3 style={{color:'gray',textShadow: '1px 1px rgb(14, 1, 1)'}}>EDUCATION</h3>
            <div className='varsity-section mt-5'>
                <img className='img-fluid varsity-logo' src={varsityLogo} alt="" />
                <h5 className=''><Typewriter
               onInit={(typewriter)=>{
                   typewriter.typeString(`BSC IN CSE FROM AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH(AIUB) - [2017-2022]`)
                   .pause(1000)
                   .start();
               }}
               /></h5>
            </div>
            <div  className='varsity-section mt-5'>
                <h5 className=''><Typewriter
               onInit={(typewriter)=>{
                   typewriter.typeString(`SSC AND HSC FROM RAJUK UTTARA MODEL COLLEGE(RUMC) - [2014 | 2016]`)
                   .pause(1000)
                   .start();
               }}
               /></h5>
                <img className='img-fluid clg-logo ' src={clgLogo} alt="" />
            </div>
        </div>
    );
};

export default Education;