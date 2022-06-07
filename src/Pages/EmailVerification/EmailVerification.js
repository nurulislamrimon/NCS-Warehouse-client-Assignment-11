import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EmailVerification = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const navigate = useNavigate();

    const handleEmailVerification = async () => {
        await sendEmailVerification(user?.email)
    }
    if (sending) {
        toast(`Verification mail sended to ${user?.email}`)
    }
    // if log out
    !user?.uid && navigate('/login')
    // if email varification done
    user?.emailVerified && navigate('/')
    return (
        <div className='text-center my-5'>
            <h1 className='text-4xl'>Your email is not verified</h1>
            <p className='text-xl'>Please verify your email</p>
            <p className='text-xl'>If you can't find the verification mail in your inbox or spam box.</p>
            <p className='text-xl'><button onClick={handleEmailVerification} className='text-teal-800 fw-bold hover:text-blue-600'>Click here</button> to send verification email again.</p>
        </div>
    );
};

export default EmailVerification;