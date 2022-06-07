import { ProviderId } from 'firebase/auth';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

function RequireAuth({ children }) {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <div className='flex vh-100 align-items-center justify-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    }
    if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <Navigate to='/verifyemail' state={{ from: location }} />
    }

    return children;
}

export default RequireAuth;