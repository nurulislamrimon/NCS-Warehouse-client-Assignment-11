import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../CustomHooks/useInventory';

const Inventory = () => {
    const { inventories, setinventories } = useInventory(true, 1);
    if (!inventories.length > 0) {
        return <div className='flex vh-100 align-items-center justify-center'>
            <Spinner animation="grow" variant="success" />
        </div>
    } else {
        return (
            <section>
                <h1 className=' underline text-2xl font-bold md:text-4xl text-center'>Inventory</h1>
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
            </section>
        );
    }
};

export default Inventory;