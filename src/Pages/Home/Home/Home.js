import './Home.css'
import resume from '../../../assets/file/MD. Ahasanuzzaman_resume_web_dev (1).pdf'
import React from 'react';
import HeadShot from '../HeadShot/HeadShot';


const Home = () => {
    return (
        <div>

           <HeadShot></HeadShot>
           <a href={resume} target="_blank" download><button className='logout-btn'>RESUME</button></a>

        </div>
    );
};

export default Home;