import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [inventories, setinventories] = useState([]);
    const [limit, setLimit] = useState(6);
    const [items, setItems] = useState(0);
    const pages = Math.ceil(items / limit);
    const [page, setPage] = useState(0);
    console.log(page);
    useEffect(() => {
        fetch('https://nameless-hamlet-70998.herokuapp.com/pagecount')
            .then(res => res.json())
            .then(data => setItems(data?.count))
    }, [])
    useEffect(() => {
        fetch(`https://nameless-hamlet-70998.herokuapp.com/allinventory?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [limit, page])
    if (!inventories.length > 0) {
        return <div className='flex vh-100 align-items-center justify-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    } else {
        return (
            <section>
                <h1 className=' underline text-2xl font-bold md:text-4xl text-center'>Inventory</h1>
                <div className="input-group flex justify-end pe-3">
                    <label htmlFor="limit">Show items :</label>
                    <select type="text" name='limit' onChange={(e) => setLimit(e.target.value)} className='p-1 ms-1 border'>
                        <option value="3">3</option>
                        <option value="6" selected>6</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="inventory p-3">
                    {inventories.map(inventory =>
                        <Card key={inventory?._id} className='relative pb-8 hover:drop-shadow-[2px_2px_5px_teal]'>
                            <Card.Img variant="top" src={inventory?.picture} className='object-cover h-52' />
                            <Card.Body>
                                <p className=' text-lg md:text-2xl capitalize'>Product: <span className='fw-bold'>{inventory?.name}</span></p>
                                <p>Price: <b>{inventory?.price} <span className='text-2xl'>৳</span></b></p>
                                <p>Quantity: <b>{inventory?.quantity} pcs</b></p>
                                <p>Sold: <b>{inventory?.sold} pcs</b></p>
                                <em>Supplier: {inventory?.supplier?.toUpperCase()}</em>
                                <Card.Text>
                                    <u>Description</u>: {inventory?.description?.length > 80 ? inventory.description.slice(0, 80).concat('...') : inventory?.description}
                                </Card.Text>
                                <Link to={`/inventory/${inventory?._id}`} className='btn bg-teal-800 text-white absolute bottom-2 hover:bg-teal-700 mt-2'>Update this item</Link>
                            </Card.Body>
                        </Card>)}
                </div>
                <div className="input-group my-3 flex justify-center">
                    <label htmlFor="Pages">Pages:</label>
                    {
                        [...Array(pages).keys()].map(key => <button key={key} className={`px-3 cursor-pointer border mx-2 ${page === key && 'bg-teal-800 text-white'}`} onClick={(e) => setPage((e.target.innerText) - 1)}>{key + 1}</button>)
                    }
                </div>
            </section >
        );
    }
};

export default Inventory;