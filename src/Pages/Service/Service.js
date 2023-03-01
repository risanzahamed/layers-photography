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

    return (
        <div className='bg-black'>
            <div className=" pt-12 mx-auto text-center">
                
                <h2 data-aos="flip-up"  data-aos-duration="1500" class="text-3xl text-center font-bold font-serif leading-tight text-white sm:text-4xl lg:text-8xl lg:leading-tight m-14 p-14">Our Famous  <span className='text-[#C48F56] '>Services.</span></h2>
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