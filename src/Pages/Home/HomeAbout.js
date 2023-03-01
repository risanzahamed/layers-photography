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

              <p className="mt-4 text-2xl leading-relaxed font-sans text-gray-50">Welcome to my photography business, based in Bangladesh. I'm Noman, a passionate photographer who specializes in a variety of photography services, including live event photoshoots, wedding photography, live videography, and wild photography. With years of experience in the industry, I pride myself on my ability to capture unforgettable moments and create stunning visual stories that my clients can treasure for a lifetime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;