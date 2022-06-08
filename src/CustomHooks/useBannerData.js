import React, { useEffect, useState } from 'react';

const useBannerData = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])
    return { banners, setBanners }
};

export default useBannerData;