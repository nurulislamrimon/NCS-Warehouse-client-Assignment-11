import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const Login = () => {

    const [showError, setShowError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [check, setCheck] = useState(false);
    const resetEmail = useRef('');
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    const from = location?.state?.from?.path || '/';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        setShowError("Please Enter a valid credential!");
    }
    if (user || fbuser) {
        console.log(user?.user?.email);
        console.log(fbuser?.user?.email);
        fetch('http://localhost:5000/login', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user?.user?.email || fbuser?.user?.email })
        })
            .then(res => res.json())
            .then(data => localStorage.setItem("accessToken", data?.accessToken))
        navigate(from, { replace: true })
    }
    sending && toast(`Reset link sended to ${resetEmail.current.value}`)
    if (loading || fbloading) {
        return <div className='flex vh-100 align-items-center justify-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    } else {
        return (
            <section className='md:w-1/2 mx-auto px-2 my-5'>
                <h1 className='text-4xl text-center my-4 '>Log in</h1>

                <button onClick={() => signInWithFacebook()} className='btn mx-auto bg-blue-600 text-white flex'> <span className='material-icons me-2'>facebook</span>Login with Facebook</button>

                <div className="flex align-items-center">
                    <hr className='w-50 me-2' />
                    <span> or </span>
                    <hr className='w-50 ms-2' />
                </div>

                <Form onSubmit={handleFormSubmit}>
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
                    {(showError || error || fberror) && <p className='text-red-600 text-center fw-bold'>{showError || error || fberror}</p>}
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
    }
};

export default Login;