import './Header.css'

import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav'>
            <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container className=' '>
                    <div as={Link} to='/' className=' fw-bold p-2 rounded  brand-name text-secondary shadow-lg'>MD. AHASANUZZAMAN</div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-bar' >
                        <div style={{marginLeft:'300px'}} className=''>
                        <Link to='/home'>HOME</Link>
                        <Link to='/blogs'>BLOGS</Link>
                        <Link to='/about'>ABOUT</Link>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;