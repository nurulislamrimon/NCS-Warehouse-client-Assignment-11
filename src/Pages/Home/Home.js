import React, { useState } from 'react';
import './Home.css'
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBannerData from '../../CustomHooks/useBannerData';
import Title from '../../Utilities/Title/Title';
import useInventory from '../../CustomHooks/useInventory';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import TopSoldProducts from '../../Utilities/TopSoldProducts/TopSoldProducts';


const Home = () => {
    const { banners, setBanners } = useBannerData();
    const { inventories, setinventories } = useInventory(6, 1);


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
                        <Carousel.Caption className='h-28'>
                            <h2 className='font-bold text-lg md:text-3xl'>{banner?.name}</h2>
                            <p>{banner?.description.length > 100 ? banner?.description.slice(0, 100).concat('...') : banner?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}

            </Carousel>

            {/* inventory section */}
            <div className='relative my-4'>
                <h1 className=' underline text-2xl font-bold md:text-4xl text-center'>Inventory</h1>
                <Link to='/manage' className='absolute right-4 bottom-0 flex text-sm fw-bold text-teal-800'>Manage Inventory <span className='material-icons'>arrow_forward</span></Link>
            </div>
            <section className="inventory p-3">
                {inventories.map(inventory =>
                    <Card key={inventory?._id}>
                        <Card.Img variant="top" src={inventory?.picture} className='object-cover h-52' />
                        <Card.Body>
                            <p className=' text-lg md:text-2xl capitalize'>Product: <span className='fw-bold'>{inventory?.name}</span></p>
                            <p>Price: <b>{inventory?.price} <span className='text-2xl'>৳</span></b></p>
                            <p>Quantity: <b>{inventory?.quantity} pcs</b></p>
                            <p>Sold: <b>{inventory?.sold} pcs</b></p>
                            <em>Supplier: {inventory?.supplier?.toUpperCase()}</em>
                            <Card.Text>
                                <u>Description</u>: {inventory?.description?.length > 80 ? inventory.description.slice(0, 80).concat('...') : inventory?.description}
                            </Card.Text>
                            <Link to={`/inventory/${inventory?._id}`} className='btn bg-teal-800 text-white hover:bg-teal-700 mt-2'>Update this item</Link>
                        </Card.Body>
                    </Card>)}
            </section>

            {/* Upcoming Products */}
            <h1 className='text-center text-2xl font-bold md:text-4xl my-4 underline'>*Upcoming Products*</h1>
            <section className="upcoming grid md:grid-cols-2 gap-4 p-3">
                {banners.map(upcoming =>
                    <Card key={upcoming._id}>
                        <Card.Img variant="top" src={upcoming?.picture} className='object-cover h-52' />
                        <Card.Body>
                            <p className='text-lg md:text-2xl capitalize'>Product: <span className='fw-bold'>{upcoming?.name}</span></p>
                            <p>Price: <b>{upcoming?.price} Upcoming</b></p>

                            <Card.Text>
                                <ReactReadMoreReadLess
                                    charLimit={80}
                                    readMoreText={"Read More▼"}
                                    readLessText={"Read Less▲"}  >
                                    {upcoming.description}
                                </ReactReadMoreReadLess>
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </section >

            {/* Most Sold items */}
            <h1 className='text-center my-4 underline text-2xl font-bold md:text-4xl'>Top selling</h1>
            <TopSoldProducts></TopSoldProducts>


        </div >
    );
};

export default Home;