import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../CustomHooks/useInventory';
import './ManageInventory.css';

const ManageInventory = () => {
    const { inventories, setinventories } = useInventory(true, 1);
    const navigate = useNavigate();

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
        <section>
            <div className="relative">
                <h1 className='text-center text-3xl underline my-2'>All inventory</h1>
                <Link to='/add' className='absolute right-0 md:right-4 bottom-0 flex text-sm fw-bold text-teal-800'>Add Inventory<span className='material-icons'>add</span></Link>
            </div>
            <Table striped bordered hover className='w-100'>
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
                        </tr>)}
                </tbody>
            </Table>
        </section>
    );
};

export default ManageInventory;