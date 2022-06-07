import React, { useEffect, useState } from 'react';

const useInventory = (limit, sort) => {
    const [inventories, setinventories] = useState([]);
    useEffect(() => {
        fetch(`https://nameless-hamlet-70998.herokuapp.com/inventory?limit=${limit}&sort=${sort}`)
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [limit, sort])
    return { inventories, setinventories }
};

export default useInventory;