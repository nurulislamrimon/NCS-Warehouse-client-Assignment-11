import React, { useState } from 'react';
import './Home.css'
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBannerData from '../../CustomHooks/useBannerData';
import Title from '../../Utilities/Title/Title';
import useInventory from '../../CustomHooks/useInventory';

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { banners, setBanners } = useBannerData();
    const { inventories, setinventories } = useInventory();
    console.log(inventories);
    return (
        <div>
            <Title title='Home' />

            {/* banner */}
            <Carousel>
                {banners.map(banner =>
                    <Carousel.Item key={banner._id}>
                        <img
                            className="d-block w-100 object-cover" style={{ height: "90vh" }}
                            src={banner?.picture}
                            alt={banner?.name}
                        />
                        <Carousel.Caption className=' h-28 blur-xl bg-teal-900'>
                        </Carousel.Caption>
                        <Carousel.Caption className='  h-28'>
                            <h2 className='text-3xl'>{banner?.name}</h2>
                            <p>{banner?.description.length > 100 ? banner?.description.slice(0, 100).concat('...') : banner?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

            </Carousel>

            {/* inventory section */}
            <h1 className='text-center text-5xl my-4 underline'>Inventory</h1>
            <section className="inventory">
                {inventories.map(inventory =>
                    <Card key={inventory._id}>
                        <Card.Img variant="top" src={inventory?.picture} className='object-cover h-52' />
                        <Card.Body>
                            <p className=' text-2xl capitalize'>Product: <span className='fw-bold'>{inventory?.name}</span></p>
                            <p>Price: <b>{inventory?.price} <span className='text-2xl'>৳</span></b></p>
                            <p>Quantity: <b>{inventory?.quantity} pcs</b></p>
                            <em>Supplier: {inventory?.supplier?.toUpperCase()}</em>
                            <Card.Text>
                                Description: {inventory?.description.length > 80 ? inventory.description.slice(0, 80).concat('...') : inventory.description}
                            </Card.Text>
                            <Link to={`/inventory/${inventory._id}`} className='btn bg-teal-800 text-white hover:bg-teal-700 mt-2'>Update this item</Link>
                        </Card.Body>
                    </Card>)}
            </section>

            {/* Upcoming Products */}
            <h1 className='text-center text-5xl my-4 underline'>*Upcoming Products*</h1>
            <section className="upcoming">
                {banners.map(upcoming =>
                    <Card key={upcoming._id}>
                        <Card.Img variant="top" src={upcoming?.picture} className='object-cover h-52' />
                        <Card.Body>
                            <p className=' text-2xl capitalize'>Product: <span className='fw-bold'>{upcoming?.name}</span></p>
                            <p>Price: <b>{upcoming?.price} Upcoming</b></p>

                            <Card.Text>
                                Description: {upcoming?.description.length > 80 && !isExpanded ?
                                    upcoming.description.slice(0, 80).concat(`...`)
                                    : upcoming.description}

                                {upcoming?.description?.length > 80 && <button onClick={() => setIsExpanded(!isExpanded)} className='underline'>{!isExpanded ? 'Read more' : '(See less)'}</button>}
                            </Card.Text>
                        </Card.Body>
                    </Card>)}
            </section>

        </div>
    );
};

export default Home;