import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceCard';

const Service = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://layers-photography-server.vercel.app/services-collection")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    console.log(data.length);
    return (
        <div className='bg-black'>
            <div className="max-w-2xl pt-12 mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Famous Services</h2>
                
            </div>
            <div className="grid container   grid-cols-1 mx-auto  lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">

                {
                    data.map(data => <ServiceCard
                        key={data._id}
                        data={data}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;