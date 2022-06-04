import React from 'react';
import { Carousel } from 'react-bootstrap';
import useBannerData from '../../CustomHooks/useBannerData';
import Title from '../../Utilities/Title/Title';

const Home = () => {
    const { banners, setBanners } = useBannerData();
    console.log(banners);
    return (
        <div>
            <Title title='Home' />
            {/* banner */}

            <Carousel>
                {banners.map(banner =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: "90vh" }}
                            src={banner?.picture}
                            alt={banner?.name}
                        />
                        <Carousel.Caption>
                            <h2 className='text-3xl'>{banner.name}</h2>
                            <p>{banner.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

            </Carousel>
        </div>
    );
};

export default Home;