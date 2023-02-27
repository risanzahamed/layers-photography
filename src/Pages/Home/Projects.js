import React from 'react';
import TabsRender from './Tabs';

const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center lg:p-10 leading-tight mx-auto  lg:text-center mt-10 mb-10 text-white sm:text-4xl lg:text-5xl">My latest <span className='text-[#C48F56] '>projects.</span></h2>
            <TabsRender/>
        </div>
    );
};

export default Projects;