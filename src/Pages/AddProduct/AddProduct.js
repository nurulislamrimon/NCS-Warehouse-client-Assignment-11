import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const picture = e.target.picture.value;
        const description = e.target.description.value;
        const email = user;
        const sold = 0;
        const newProduct = { name, price, quantity, supplier, picture, description, email, sold }

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(newProduct);
    }
    return (
        <div className='mb-3'>
            <Form className='md:w-1/2 mx-auto px-2' onSubmit={handleFormSubmit}>
                <h1 className='text-4xl text-center'>Add a new product</h1>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Product name:</Form.Label>
                    <Form.Control type="text" name='name' placeholder='Strich Tshirt' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" name='price' placeholder='500' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="text" name='quantity' placeholder='1000' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier:</Form.Label>
                    <Form.Control type="text" name='supplier' placeholder='Company name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url:</Form.Label>
                    <Form.Control type="text" name='picture' placeholder='https://.............' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Products Details:</Form.Label>
                    <Form.Control type="text" as="textarea" name='description' placeholder='About this product.............' required />
                </Form.Group>

                <Button type="submit" className='bg-teal-800'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;