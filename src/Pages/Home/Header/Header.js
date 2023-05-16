import './Header.css'

import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav container'>
            <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container className=' '>
                    <div as={Link} to='/' className=' fw-bold p-2  brand-name text-secondary'>MD. AHASANUZZAMAN</div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-bar' >
                        <div style={{marginLeft:'300px'}} className=''>
                        <Link to='/'>HOME</Link>
                        <a href="#skills">SKILLS</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#education">EDUCATION</a>
                        <a href="#contact">CONTACT</a>
                        
                      
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;