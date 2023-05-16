import './Experiences.css'
import React from 'react';
import aiubExp from '../../../assets/images/aiub200_200.png'

const Experiences = () => {
    return (
        <div className='experience-section container' id='experiences'>
            <h3 className='' style={{color:'gray',textShadow: '1px 1px rgb(14, 1, 1)'}}>EXPERIENCES</h3>
            <div className='experience-div-one-box'>
            <div className='mt-5 experience-div-one'>   
                    <img  src={aiubExp} alt="" />
                    <div className='info-text'>
                    <h5>TEACHING ASSISTANT</h5>
                    <h6>IN</h6>
                    <h6>COMPUTER GRAPHICS</h6>
                    <small>JAN-MAY[2022]</small>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Experiences;