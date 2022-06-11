import React, { useEffect, useState } from 'react';

const useBannerData = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('https://nameless-hamlet-70998.herokuapp.com/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])
    return { banners, setBanners }
};

export default useBannerData;