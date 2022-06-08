import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [inventories, setinventories] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [user])

    const handleDeleteProduct = (id) => {
        const confirmation = window.confirm('Are you sure want to delete this product?');
        if (confirmation) {
            fetch(`http://localhost:5000/manage/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('The product deleted successfully')
                        const remainingInventory = inventories.filter(inventory => inventory._id !== id)
                        setinventories(remainingInventory)
                    }
                })
        }

    }

    return (
        !inventories?.length > 0 ?
            <div className='flex vh-100 align-items-center justify-center'>
                <Spinner animation="grow" variant="success" />
                <h1 className='text-xl md:text-5xl vh-100 flex align-items-center justify-center'>Please <Link to='/add' className='text-teal-800 mx-3 text-bold'> Click here </Link>to add a product.</h1>
            </div>
            :
            <Table striped bordered hover className='w-100 h-1/2'>
                <thead>
                    <tr>
                        <th className='text-sm md:text-lg'>No.</th>
                        <th className='text-sm md:text-lg'>Product</th>
                        <th className='text-sm md:text-lg'>Price</th>
                        <th className='text-sm md:text-lg'>Quantity</th>
                        <th className='text-sm md:text-lg' colSpan={2}> <p className='w-50'>Supplier</p> </th>
                    </tr>
                </thead>
                <tbody>
                    {inventories.map(inventory =>
                        <tr key={inventory?._id}>
                            <td className='text-sm md:text-xl'>{inventories.indexOf(inventory) + 1}</td>
                            <td className='text-sm md:text-xl'>{inventory?.name}</td>
                            <td className='text-sm md:text-xl'>{inventory?.price}<span className='text-3xl'>৳</span></td>
                            <td className='text-sm md:text-xl'>{inventory.quantity}</td>
                            <td colSpan={2} className='text-sm flex justify-between md:px-4 md:text-xl'><p className='white'>{inventory?.supplier}</p>


                                <div className='flex'>
                                    <img src={inventory.picture} alt="" width='100' className='me-5 hidden md:block object-cover h-14' />
                                    <button onClick={() => navigate(`/update/${inventory?._id}`)}><span className='material-icons text-teal-800 cursor-pointer border-2 md:p-2 rounded-circle hover:bg-gray-300'>edit</span></button>

                                    <button onClick={() => handleDeleteProduct(inventory._id)}>
                                        <span className='material-icons text-red-900 cursor-pointer border-2 md:p-2 rounded-circle hover:bg-gray-300'>delete</span>
                                    </button>
                                </div>

                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>)
};

export default MyItems;