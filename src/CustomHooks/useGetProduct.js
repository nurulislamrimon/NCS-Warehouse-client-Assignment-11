import React, { useEffect, useState } from 'react';

const useGetProduct = (id) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        fetch(`https://nameless-hamlet-70998.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])
    return { inventory, setInventory }
};

export default useGetProduct;