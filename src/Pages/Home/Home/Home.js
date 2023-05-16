import './Home.css'
import resume from '../../../assets/file/MD_AHASANUZZAMAN_RESUME.pdf'
import React, { useRef } from 'react';
import HeadShot from '../HeadShot/HeadShot';
import TypeWriterTexts from '../TypeWriterTexts/TypeWriterTexts';
import { GrLinkedinOption } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';
import { FaFacebookF } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiMysql } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiOpengl } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import contactMe from '../../../assets/images/contactMe.png'
import { toast } from 'react-toastify';
import Projects from '../Projects/Projects';
import Education from './Education/Education';
import Experiences from '../Experiences/Experiences';


const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9clui6e', 'template_2mgmdi7', form.current, '9kx_SISSXqGKxHJbD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast.success('EMAIL SENT')
    };
    return (
        <div>

            <HeadShot></HeadShot>
            <TypeWriterTexts></TypeWriterTexts>

            {/*////////RESUME BUTTON////// */}
            <a className='mt-5' href={resume} target="_blank" download><button className='logout-btn'>RESUME</button></a>
            {/*////////RESUME BUTTON////// */}


            {/*/////////////////SOCIAL LINKS///////////////*/}
            <div className='socialLinks-div'>
                <a className='socialLinks' href="https://www.linkedin.com/in/tanvir-ehsan60" target='_blank'><GrLinkedinOption></GrLinkedinOption></a>
                <a className='socialLinks' href="https://github.com/EHSANJiSHAD" target='_blank'><VscGithub></VscGithub></a>
                <a className='socialLinks' href="https://www.facebook.com/tanvir.ehsan.60/" target='_blank'><FaFacebookF></FaFacebookF></a>
            </div>
            {/*/////////////////SOCIAL LINKS///////////////*/}


            {/*//////////////////////////// SKILLS SECTION/////////////////////////////////// */}
            <div id='skills' className="skill-div mb-5 container">
                <div className='skill-text'>SKILLED IN</div>
                <div className='skill-icons'>
                    <div className=' d-flex justify-content-center align-items-center flex-column ' title='REACT JS'><FaReact></FaReact><small className=' individual-skill-text'>REACT JS</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='MONGODB'><SiMongodb></SiMongodb><small className='individual-skill-text'>MONGODB</small></div>
                    <div className=' d-flex justify-content-center align-items-center flex-column ' title='Node js'><IoLogoNodejs></IoLogoNodejs><small className='individual-skill-text'>NODE JS</small></div>
                    <div className=' d-flex justify-content-center align-items-center flex-column ' title='Html 5'><AiFillHtml5></AiFillHtml5><small className='individual-skill-text'>HTML 5</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='CSS 3'><DiCss3></DiCss3><small className='individual-skill-text'>CSS 3</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='C++'><CgCPlusPlus></CgCPlusPlus><small className='individual-skill-text'>C++</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='MySql'><SiMysql></SiMysql><small className='individual-skill-text'>MYSQL</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column ' title='Bootstrap'><SiBootstrap></SiBootstrap><small className='individual-skill-text'>BOOTSTRAP</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='Tailwind'><SiTailwindcss></SiTailwindcss><small className='individual-skill-text'>TAILWIND</small></div>
                    <div className='d-flex justify-content-center align-items-center flex-column' title='OpenGL'><SiOpengl></SiOpengl><small className='individual-skill-text'>OPENGL</small></div>
                </div>
            </div>
            {/*//////////////////////////// SKILLS SECTION/////////////////////////////////// */}

            {/* ////////////////////////PROJECTS////////////////////// */}
                <h3  style={{color:'gray',textShadow: '1px 1px rgb(14, 1, 1)'}}>PROJECTS</h3>
                <Projects></Projects>
            {/* ////////////////////////PROJECTS////////////////////// */}

            {/* //////////////////////////////EXPERIENCES//////////////////////////// */}
            <Experiences></Experiences>
            {/* //////////////////////////////EXPERIENCES//////////////////////////// */}

            {/* /////////////////////////EDUCATION////////////////////// */}
            <Education></Education>
            {/* /////////////////////////EDUCATION////////////////////// */}


            {/*/////////////////////////// CONTACT ME FORM/////////////////////// */}
            <h6 className='contact-me-text' id='contact'>IF YOU HAVE ANY QUERIES,DO KNOCK ME HERE..</h6>
            <div className='container contactMe'>
            <div>

                <img className='img-fluid' src={contactMe} alt="" />
                
            </div>
            <div className='w-100 mb-5'>
                <form className='form ' ref={form} onSubmit={sendEmail}>
                    <input className='form-input' placeholder='YOUR NAME' type="text" name="to_name" />
                    <input className='form-input' placeholder='YOUR EMAIL' type="email" name="from_name" />
                    <textarea className='form-input' placeholder='MESSAGE' name="message" />
                    <input className='form-input logout-btn' type="submit" value="Send" />
                </form>
            </div>
            </div>
            {/*/////////////////////////// CONTACT ME FORM/////////////////////// */}



        </div>
    );
};

export default Home;