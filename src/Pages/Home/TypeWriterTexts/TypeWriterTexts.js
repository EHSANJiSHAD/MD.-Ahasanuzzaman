import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypeWriterTexts.css'
const TypeWriterTexts = () => {
    return (
        <div className='typewriter-div'>
            <Typewriter
               onInit={(typewriter)=>{
                   typewriter.typeString(`Hi! i'm MD.Ahasanuzzaman`)
                   .pause(1000)
                   .deleteAll()
                   typewriter.typeString(`Aimed to become a full-stack developer`)
                   .start();
               }}
               />
        </div>
    );
};

export default TypeWriterTexts;