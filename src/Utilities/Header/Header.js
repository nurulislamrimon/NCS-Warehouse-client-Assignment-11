import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='my-4 pb-2'>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className='bg-teal-800'>
                <Container>
                    <Link to='/home' className='text-white text-3xl title'>NCS Warehouse</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto d-flex align-items-center'>
                            {user?.uid &&
                                (user?.photoURL ?
                                    <img src={user?.photoURL} alt='user' width={40} height={40} className='rounded-circle border-blue-900 border border-2' /> :
                                    <p className='rounded-circle border-blue-900 border border-2 h-10 w-10 text-center text-white pt-1'>{user?.displayName}</p>)}

                            <CustomLink to='/home' className='my-2 mx-3 d-block'>
                                Home
                            </CustomLink>

                            <CustomLink to='/blogs' className='my-2 mx-3 d-block'>
                                Blogs
                            </CustomLink>
                            {user ?
                                <button onClick={() => signOut(auth)} className='my-2 mx-3 d-block text-white'>
                                    Log out
                                </button> :
                                <>
                                    <CustomLink to='/login' className='my-2 mx-3 d-block'>
                                        Login
                                    </CustomLink>
                                    <CustomLink to='/signup' className='my-2 mx-3 d-block'>
                                        Signup
                                    </CustomLink>
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;