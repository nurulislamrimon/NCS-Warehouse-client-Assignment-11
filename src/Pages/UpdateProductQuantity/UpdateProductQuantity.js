import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGetProduct from '../../CustomHooks/useGetProduct';

const UpdateProductQuantity = () => {
    const { id } = useParams();
    // const { updateInfo, setUpdateInfo, handleUpdateProduct } = useUpdateProduct();
    const { inventory, setInventory } = useGetProduct(id);


    const handleDeliveredItemChange = () => {
        const { quantity, sold, ...rest } = inventory;
        const newQuantity = quantity - 1;
        const newSold = parseInt(sold) + 1;
        // const confirmation = window.confirm('Are you Sure want ?')
        // if (confirmation) {
        setInventory({ quantity: newQuantity, sold: newSold, ...rest })
        // }
        // return;
    }

    const handleDeliveredItem = () => {
        // submit on db
        // console.log(handleUpdateProduct(id, inventory));
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => { if (data.modifiedCount > 0) { toast('updated') } })
    }
    return (
        <div className='mb-2 w-3/4 md:w-2/4 mx-auto'>
            <h1 className='text-2xl md:text-2xl text-center underline'>Update the product</h1>
            <h2 className='text-center text-lg md:text-2xl my-2 fw-bold text-teal-800'>{inventory.name}</h2>
            <div className="grid md:grid-cols-2 align-items-center">
                <img src={inventory.picture} alt="Product" className='md:order-2' />
                <div className="info">
                    <p>Id: {inventory._id}</p>
                    <h3 className='md:text-lg'>Price: <b>{inventory.price}<span className='text-2xl'>৳</span></b></h3>
                    <h3 className='md:text-lg'>Quantity: <b>{inventory.quantity}pcs</b></h3>
                    <em className='md:text-lg'>Supplier name: {inventory.supplier}</em>
                    <h3 className='md:text-lg'>Item Already Sold: <b>{inventory.sold}pcs</b></h3>
                </div>
            </div>
            <div className="grid md:grid-cols-2 align-items-center">
                <div>
                    <Button className='bg-teal-800 my-4 flex' onClick={handleDeliveredItem} onClickCapture={handleDeliveredItemChange}>1 item delivered <span className='material-icons ms-2'>local_shipping
                    </span></Button>
                </div>

                <Form >
                    <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label>Enter quatity to add:</Form.Label>
                        <Form.Control type="text" name='quantity' placeholder='Enter a valid number' required />
                    </Form.Group>
                    <Button className='bg-teal-800 flex'>Add Items <span className='material-icons ms-2'>add_shopping_cart

                    </span></Button>
                </Form>
            </div>

        </div >
    );
};

export default UpdateProductQuantity;