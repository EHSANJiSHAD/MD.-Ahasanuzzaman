import './HeadShot.css'
import headShot from '../../../assets/images/headshot2.png'
import React from 'react';
import Rparticle from '../Rparticles/Rparticle';
import { Button, Card } from 'react-bootstrap';



const HeadShot = () => {

  return (
    <div className='mt-5 headshot-section'>

      <Rparticle></Rparticle>

      <div className='headshot'>

        

        <img className='w-100 align-center' src={headShot} alt="" />


      </div>




    </div>
  );
};

export default HeadShot;