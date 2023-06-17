import React from 'react';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import HomeClient from './HomeClient';
import HomeGridGallary from './HomeGridGallary';
import ProcessSec from './ProcessSec';
import Projects from './Projects';
import Service from './Service';
import SliderSec from './SliderSec';
import PricingTable from './PricingTable';
import Contact from './Contact';

const MainHome = () => {
    return (
        <div>
            <section className="bg-[#040404] mx-auto  pt-8 pb-8">

                <HomeBanner />
                {/* logo clinet section  */}
                
                <HomeClient />

                <SliderSec/>
                
                {/* about us section */}
                <HomeAbout />


                <HomeGridGallary/>

                <Service/>

                <Projects/>

                <ProcessSec/>

                <PricingTable/>

                <Contact/>
            </section>
        </div>
    );
};

export default MainHome;