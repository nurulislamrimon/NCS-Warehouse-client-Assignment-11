import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGetProduct from '../../CustomHooks/useGetProduct';

const UpdateProductQuantity = () => {
    const { id } = useParams();
    const { inventory, setInventory } = useGetProduct(id);

    const handleDeliveredItemChange = () => {
        const { quantity, sold, ...rest } = inventory;
        const newQuantity = quantity - 1;
        const newSold = parseInt(sold) + 1;
        setInventory({ quantity: newQuantity, sold: newSold, ...rest })
    }

    const handleDeliveredItem = () => {
        fetch(`https://nameless-hamlet-70998.herokuapp.com/inventory/${id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => { if (data.modifiedCount > 0) { toast('Congratulation! You made a new sell.') } })
    }

    const handleProductInsertion = (e) => {
        e.preventDefault();
        const { quantity, ...rest } = inventory;
        const newAdded = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(newAdded);
        const newData = { quantity: newQuantity, ...rest };

        fetch(`https://nameless-hamlet-70998.herokuapp.com/inventory/${id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Congratulation! You made a new sell.');
                    window.location.reload();
                }
            })

    }
    return (
        <section className='mb-2 w-3/4 md:w-2/4 mx-auto'>
            <h1 className='text-2xl md:text-4xl text-center underline'>Update the product</h1>
            <h2 className='text-center text-lg md:text-2xl my-2 fw-bold text-teal-800'>{inventory.name}</h2>
            <div className="grid md:grid-cols-2 align-items-center justify-center">
                <img src={inventory.picture} alt="Product" className='md:order-2 object-cover w-60 h-52' />
                <div className="info">
                    <p>Id: {inventory._id}</p>
                    <h3 className='md:text-lg'>Price: <b>{inventory.price}<span className='text-2xl'>৳</span></b></h3>
                    <h3 className='md:text-lg'>Quantity: <b>{inventory.quantity}pcs</b></h3>
                    <em className='md:text-lg'>Supplier name: {inventory.supplier}</em>
                    <h3 className='md:text-lg'>Item Already Sold: <b>{inventory.sold}pcs</b></h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 align-items-center my-3">
                <Form onSubmit={handleProductInsertion} >
                    <Form.Group className="my-3" controlId="quantity">
                        <Form.Label>Enter quatity to add:</Form.Label>
                        <Form.Control type="number" name='quantity' placeholder='Enter a valid number' required />
                    </Form.Group>
                    <Button type='submit' className='bg-teal-800 flex'>Add Items <span className='material-icons ms-2'>add_shopping_cart
                    </span></Button>
                </Form>

                <div>
                    <Button className='bg-teal-800 my-4 flex mx-auto' onClick={handleDeliveredItem} onClickCapture={handleDeliveredItemChange}>1 item delivered <span className='material-icons ms-2'>local_shipping
                    </span></Button>
                </div>
            </div>
            <Link to='/manage' className='flex text-sm fw-bold text-teal-800 w-100 justify-center'>Manage Inventory <span className='material-icons'>arrow_forward</span></Link>
        </section >
    );
};

export default UpdateProductQuantity;