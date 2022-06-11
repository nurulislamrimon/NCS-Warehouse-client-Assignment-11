/* import React, { useState } from 'react';
import { toast } from 'react-toastify';

const useDeleteProduct = () => {
    const [remainingInventory, setRemainingInventory] = useState({})
    const handleDelete = (id) => {
        fetch(`https://nameless-hamlet-70998.herokuapp.com/manage/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast('The product deleted successfully')
                }
            })
    }
    return { remainingInventory, setRemainingInventory, handleDelete }
};

export default useDeleteProduct; */