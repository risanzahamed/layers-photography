import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ data }) => {
    return (
        <div>
            <section className="py-10 sm:py-16 ">
                <div className="px-4 mx-auto sm:px-6 max-w-7xl">
                    <div >
                        <div>
                            <PhotoProvider>
                                <PhotoView src={data.image}>
                                    <img className='rounded-lg' src={data.image} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> {data.categoryName} </span>
                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-white"> {data.serviceName} </a>
                            </p>
                            <p className="mt-4 text-white">{data.details.slice(0,100)}...</p>


                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-white"> {data.packagePrice} </a>
                            </p>
                            <Link to={`/post/${data._id}`} ><button className='btn  bg-[#C48836] mt-5 text-white'>View Details</button></Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceCard;