import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const Login = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const resetEmail = useRef('');
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    sending && toast(`Reset link sended to ${resetEmail.current.value}`)
    user || fbuser && navigate('/')
    return (
        <section className='md:w-1/2 mx-auto px-2 my-5'>
            <button onClick={() => signInWithFacebook()} className='btn bg-blue-600 text-white'>Login with Facebook</button>
            <Form onSubmit={handleFormSubmit}>
                <h1 className='text-4xl text-center'>Log in</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={resetEmail} name='email' placeholder="Enter email" />
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
            <p className='md:text-lg'>Forgot password? <button onClick={async () => {
                if (!resetEmail.current.value) {
                    return toast('Enter a valid email')
                }
                await sendPasswordResetEmail(resetEmail.current.value)
            }} className='text-teal-800 hover:text-blue-700 fw-bold'>Reset password</button></p>
            <p className='text-center md:text-lg'>Don't have an account?<Link to='/signup' className='text-teal-800 fw-bold'> Sign up</Link></p>
        </section>
    );
};

export default Login;