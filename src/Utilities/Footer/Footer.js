import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='fixed bottom-0 w-100 text-center py-2 bg-green-800 text-white'>
            Copyright &copy; {year} Nobi Cloth Store
        </footer>
    );
};

export default Footer;