import React from 'react';

const HomeAbout = () => {
  return (
    <div>
      <section className="py-10 mt-20  sm:py-16 lg:py-24">
        <div className="max-w-[1550px] px-4 mx-auto sm:px-6 ">
          <div className="grid items-center md:grid-cols-2 ">
            <div className=" sm:pr-0">
              <div className="relative  slide-up-3 max-w-xs  lg:max-w-md mb-24">
                <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" />

                <img className="absolute origin-bottom-right scale-75 -right-6  rounded-md -bottom-12 lg:-right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" alt="" />
              </div>
            </div>

            <div className='slide-up-3'>
              <h2 className="text-base font-medium text-white">ABOUT US</h2>

              <p className="mt-4 text-2xl leading-relaxed font-sans text-gray-50">Professional photo shooting of weddings, holidays and celebrations.
                RETOUCH
                Post-processing of photos, preparation for printing, video recording.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;