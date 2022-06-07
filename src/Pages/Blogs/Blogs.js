import React from 'react';

const Blogs = () => {
    return (
        <article className='m-4'>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What's the defferences between Javascript and NodeJS?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u> The high level programmig language Javascript was developed by Brendan Eich that was only run in browser. Ryan Dahl developed NodeJs as a javascript runtime environment to run javascript in server. Javascript runs in browser engine like V8, JS Core and spidermonkey. The V8 engine is the only engine to run nodejs. RamdaJS,  Angular, TypedJS are the frameworks of javascript. Express, Lodash are the modules of nodejs.</p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: When should you use NodeJS and when should Mongodb?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u>.</p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What are the defferences between SQL and noSQL?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u>.</p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What is the purpose of JWT and how it works?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u>.</p>
        </article>
    );
};

export default Blogs;