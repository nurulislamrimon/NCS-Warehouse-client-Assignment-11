import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Login = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    user && navigate('/')
    return (
        <Form className='md:w-1/2 mx-auto px-2 my-5' onSubmit={handleFormSubmit}>
            <h1 className='text-4xl text-center'>Log in</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" onChange={() => setCheck(!check)} />
            </Form.Group>
            <Button variant='dark' type="submit" className='bg-teal-800' disabled={!check}>
                Submit
            </Button>
        </Form>
    );
};

export default Login;