import React from 'react';
import Title from '../../Utilities/Title/Title';

const NotFound = () => {
    return (
        <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
            <Title title='Page Not Found' />
            <h1 className='text-5xl'>404</h1>
            <h3 className='text-2xl'>Sorry! We can't found this page.</h3>
        </div>
    );
};

export default NotFound;