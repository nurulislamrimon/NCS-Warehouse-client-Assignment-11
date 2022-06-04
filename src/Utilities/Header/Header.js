import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='my-4 pb-2'>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className='bg-green-800'>
                <Container>
                    <Link to='/home' className='text-white text-3xl title'>NCS Warehouse</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <CustomLink to='/blogs'>
                                    Blogs
                                </CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink to='/login'>
                                    Login
                                </CustomLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;