import React from 'react';
import { Card } from 'react-bootstrap';
import useInventory from '../../CustomHooks/useInventory';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const TopSoldProducts = () => {
    const { inventories, setInventories } = useInventory(10, -1)
    return (
        <section className="topSoldProduct grid md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
            {inventories.map(topSoldProduct =>
                <Card key={topSoldProduct._id} className='hover:drop-shadow-[2px_2px_5px_teal]'>
                    <Card.Img variant="top" src={topSoldProduct?.picture} className='object-cover h-52' />
                    <Card.Body>
                        <p className='text-lg md:text-lgcapitalize'>Product: <span className='fw-bold'>{topSoldProduct?.name}</span></p>
                        <p>Price: <b>{topSoldProduct?.price} <span className='text-2xl'>৳</span></b></p>

                        <p>Sold items: <b>{topSoldProduct?.sold} pcs</b></p>

                        <Card.Text>
                            <u>Description:</u> <ReactReadMoreReadLess
                                charLimit={40}
                                readMoreText={"Read More ▼"}
                                readLessText={"Read Less ▲"}  >
                                {topSoldProduct.description}
                            </ReactReadMoreReadLess>
                        </Card.Text>
                    </Card.Body>
                </Card>)
            }
        </section >
    );
};

export default TopSoldProducts;