import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const newPassword = e.target.newPassword.value;
        const reTypePassword = e.target.reTypePassword.value;
        if (newPassword !== reTypePassword) {
            toast("Your both password didn't match")
            return
        }
        createUserWithEmailAndPassword(email, newPassword);
    }
    user && navigate('/');
    return (
        <Form className='md:w-1/2 mx-auto px-2 my-5' onSubmit={handleFormSubmit}>
            <h1 className='text-4xl text-center'>Sign up</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" name='newPassword' placeholder="New Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Re-type Password</Form.Label>
                <Form.Control type="password" name='reTypePassword' placeholder="Re-type Password" required />
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

export default Signup;