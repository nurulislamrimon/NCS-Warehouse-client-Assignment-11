import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setinventories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory?limit=${6}`)
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [])
    return { inventories, setinventories }
};

export default useInventory;