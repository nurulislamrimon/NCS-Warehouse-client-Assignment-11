import React from 'react';

const Blogs = () => {
    return (
        <article className='m-4'>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What's the defferences between Javascript and NodeJS?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u> The high level programming language Javascript was developed by Brendan Eich that was only run in browser. Ryan Dahl developed NodeJs as a javascript runtime environment to run javascript in server. Javascript runs in browser engine like V8, JS Core and spidermonkey. The V8 engine is the only engine to run nodejs. RamdaJS,  Angular, TypedJS are the frameworks of javascript. Express, Lodash are the modules of nodejs.</p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: When should you use NodeJS and when should Mongodb?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u> Node Js is a runtime for javascript environment but Mongodb is a storage of data. We need NodeJs to run javascript code on server side but Mongodb is used to storing data as bson format. NodeJs is used to get datas from database, it could be a SQL or NoSQL database. Mongodb is a NoSQL database.</p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What are the defferences between SQL and NoSQL?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u> Primarily SQL databases are known as relational database but NoSQL databases are known as non-relational database. SQL is tabular structured but NoSQL has many structure to store datas like document-oriented, column-oriented, graph-based and key-value. SQL databases are vertically scalable but NoSQL horizontally scalable. </p>
            <h1 className='md:text-3xl text-xl pt-3'>Q: What is the purpose of JWT and how it's works?</h1>
            <p className='md:text-xl text-md'> <u>Ans:</u> JSON Web Token is a way to securely trasmitting information between parties and securing a site by authorization checking. This token is mostly used in authorization. When someone need to be authorized for an execution we will use it for checking the user. JWT will be more useful for secure transmitting of information. If a user need to be authorized to get a sensitive data then we should use JWT.</p>
        </article>
    );
};

export default Blogs;