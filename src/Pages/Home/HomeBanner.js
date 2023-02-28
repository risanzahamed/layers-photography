import React from 'react';
import photoHero from "../../images/photo-header.JPG"

const HomeBanner = () => {
    return (
        <div>
            <div className="px-4 container  mx-auto overflow-hidden bg-[#040404] sm:px-6 lg:px-8">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                    <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                        <div>
                            <h2 className="text-4xl slide-up font-bold font-serif leading-none text-white sm:text-4xl lg:text-7xl lg:leading-tight">
                                Hi, I'm Noman <br />
                                — a Professional <br />
                                Photographer </h2>
                            <div className='lg:w-[500px]'>
                                <p className=" text-2xl slide-up-2 mt-8 font-sans text-gray-50">
                                    Based in Bangladesh, I specialize in landscape,
                                    advertorial and conceptual photography.
                                    Here you will be able to find my latest shots.</p>
                            </div>

                            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg" alt="" />
                                </a>

                                <a href="#" title="" className="flex" role="button">
                                    <img className="w-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className=" slide-up-img px-12">

                            <img className=" w-full mx-auto " src="https://templates.hibootstrap.com/povi/default/assets/img/hero/hero-img-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;