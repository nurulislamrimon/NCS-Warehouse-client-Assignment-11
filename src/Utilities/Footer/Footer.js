import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='w-100 text-center py-2 bg-teal-800 text-white'>
            Copyright &copy; {year} Nobi Cloth Store
        </footer>
    );
};

export default Footer;