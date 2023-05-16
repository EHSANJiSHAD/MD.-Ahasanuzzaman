import React from 'react';
import './Projects.css'
import { Button, Card, CardGroup } from 'react-bootstrap';
import graphShift1 from '../../../assets/projects/graphShift1.JPG'
import banglaBoi1 from '../../../assets/projects/banglaBoi1.JPG'
import selfMade1 from '../../../assets/projects/selfmade1.JPG'
import { AiFillEye } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import londonBridge from '../../../assets/images/AfternoonView.JPG'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='container'>
                <CardGroup className='gap-3 '>
                    <Card style={{ background: '#e0e4eb' }} className='card-div mt-5'>
                        <Card.Img variant="top" src={graphShift1} />
                        <Card.Body className='card-body'>
                            <Card.Title className='text-secondary'>GRAPH SHIFT</Card.Title>
                            <Card.Text className='text-secondary'>
                                This is a graphics card Manufacturer product management website.Here anyone with an valid email can buy graphics cards and manage his personal items

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ background: '#e0e4eb' }}>

                            <a href="https://github.com/EHSANJiSHAD/graph-shift-client" target='_blank'><button className='logout-btn' ><VscGithub className='mb-1'></VscGithub> CLIENT</button></a>
                            <a href="https://github.com/EHSANJiSHAD/graph-shift-server" target='_blank'><button className='logout-btn '><VscGithub className='mb-1'></VscGithub> SERVER</button></a>
                            <a href="https://graph-shift.web.app/" target='_blank'><button className='logout-btn'><AiFillEye className='mb-1'></AiFillEye> DEMO</button></a>

                        </Card.Footer>
                    </Card>
                    <Card style={{ background: '#e0e4eb' }} className='card-div mt-5'>
                        <Card.Img variant="top" src={banglaBoi1} />
                        <Card.Body className='card-body'>
                            <Card.Title className='text-secondary'>BANGLA BOI</Card.Title>
                            <Card.Text className='text-secondary'>
                                This is a Bengali Book inventory management website.A valid user can add books according to his/her will.Can manage quantity and can delete unwanted books if he/she wishes to.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ background: '#e0e4eb' }}>
                            <a href="https://github.com/EHSANJiSHAD/bangla-boi-client" target='_blank'><button className='logout-btn' ><VscGithub className='mb-1'></VscGithub> CLIENT</button></a>
                            <a href="https://github.com/EHSANJiSHAD/bangla-boi-server" target='_blank'><button className='logout-btn '><VscGithub className='mb-1'></VscGithub> SERVER</button></a>
                            <a href="https://bangla-boi-2bb42.web.app/" target='_blank'><button className='logout-btn'><AiFillEye className='mb-1'></AiFillEye> DEMO</button></a>
                        </Card.Footer>
                    </Card>
                    <Card style={{ background: '#e0e4eb' }} className='card-div mt-5'>
                        <Card.Img variant="top" src={selfMade1} />
                        <Card.Body className='card-body'>
                            <Card.Title className='text-secondary'>SELF MADE</Card.Title>
                            <Card.Text className='text-secondary'>
                                A simple S.P.A website about Independent catering service provider. It was my first REACT project where i've implemented google firebase auth in login system.And gave a small glimpse what a catering service provider can provide.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ background: '#e0e4eb' }}>
                            <a href="https://github.com/EHSANJiSHAD/self-made-catering" target='_blank'><button className='logout-btn' ><VscGithub className='mb-1'></VscGithub></button></a>
                            <a href="https://self-made-1947d.web.app/" target='_blank'><button className='logout-btn'><AiFillEye className='mb-1'></AiFillEye> DEMO</button></a>
                        </Card.Footer>
                    </Card>
                    <Card style={{ background: '#e0e4eb' }} className='card-div mt-5'>
                        <Card.Img variant="top" style={{ height: '120px' }} src={londonBridge} />
                        <Card.Body className='card-body'>
                            <Card.Title className='text-secondary'>LONDON BRIDGE</Card.Title>
                            <Card.Text className='text-secondary'>
                                A simple animation of london bridge's seasonal view, made with openGL.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ background: '#e0e4eb' }}>
                            <a href="https://github.com/EHSANJiSHAD/LONDON_BRIDGE" target='_blank'><button className='logout-btn' ><VscGithub className='mb-1'></VscGithub></button></a>
                            <a href="https://drive.google.com/file/d/1n3CxmkSZpTnTPpFpvZjPBQagZP4hQ-_U/view?usp=sharing" target='_blank'><button className='logout-btn'><AiFillEye className='mb-1'></AiFillEye> DEMO</button></a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Projects;