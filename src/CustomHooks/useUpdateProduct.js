/* import { data } from 'autoprefixer';
import React, { useState } from 'react';

const useUpdateProduct = () => {
    const [updateInfo, setUpdateInfo] = useState({});
    const handleUpdateProduct = (id, newInfo) => {
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => setUpdateInfo(data))
    }

    return { updateInfo, setUpdateInfo, handleUpdateProduct }
}


export default useUpdateProduct; */