import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://layers-photography-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div>
            <div className=" mt-20 mx-auto text-center">
            <h2 class="text-3xl text-center font-bold font-serif leading-tight text-white sm:text-4xl lg:text-8xl lg:leading-tight m-14 p-14">Our Famous  <span className='text-[#C48F56] '>Services.</span></h2>
            </div>
            <div className="grid container   grid-cols-1 mx-auto  lg:mt-16 lg:grid-cols-3 ">

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