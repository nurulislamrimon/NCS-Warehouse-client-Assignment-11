import React, { useEffect, useState } from 'react';

const useUpdatInventory = (id) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])
    return { inventory, setInventory }
};

export default useUpdatInventory;