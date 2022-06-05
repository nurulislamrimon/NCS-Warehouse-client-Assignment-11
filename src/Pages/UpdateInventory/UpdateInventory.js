import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useUpdatInventory from '../../CustomHooks/useUpdatInventory';

const UpdateInventory = () => {
    const { id } = useParams();
    const { inventory, setInventory } = useUpdatInventory(id);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inventory)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) { alert('Update completed') }
            })
    }
    const handleFormChange = (e) => {
        if (e.target.name === 'name') {
            const { name, ...rest } = inventory;
            const newName = e.target.value;
            setInventory({ name: newName, ...rest })
        }
        if (e.target.name === 'price') {
            const { price, ...rest } = inventory;
            const newPrice = e.target.value;
            setInventory({ price: newPrice, ...rest })
        }
        if (e.target.name === 'quantity') {
            const { quantity, ...rest } = inventory;
            const newQuantity = e.target.value;
            setInventory({ quantity: newQuantity, ...rest })
        }
        if (e.target.name === 'supplier') {
            const { supplier, ...rest } = inventory;
            const newSupplier = e.target.value;
            setInventory({ supplier: newSupplier, ...rest })
        }
        if (e.target.name === 'picture') {
            const { picture, ...rest } = inventory;
            const newPicture = e.target.value;
            setInventory({ picture: newPicture, ...rest })
        }
        if (e.target.name === 'description') {
            const { description, ...rest } = inventory;
            const newDescription = e.target.value;
            setInventory({ description: newDescription, ...rest })
        }
    }
    return (
        <div className='mb-3'>
            <Form className='md:w-1/2 mx-auto px-2' onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <h1 className='text-4xl text-center'>Update the product</h1>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Product name:</Form.Label>
                    <Form.Control type="text" name='name' value={inventory.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" name='price' value={inventory.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="text" name='quantity' value={inventory.quantity} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier:</Form.Label>
                    <Form.Control type="text" name='supplier' value={inventory.supplier} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url:</Form.Label>
                    <img src={inventory.picture} alt="product" height={100} width={100} className='mb-1' />
                    <Form.Control type="text" name='picture' value={inventory.picture} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Products Details:</Form.Label>
                    <Form.Control type="text" as="textarea" name='description' value={inventory.description} />
                </Form.Group>

                <Button variant='dark' type="submit" className='bg-teal-800'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UpdateInventory;