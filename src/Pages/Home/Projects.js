import React from 'react';
import TabsRender from './Tabs';

const Projects = () => {
    return (
        <div>
             <h2 class="text-3xl text-center font-bold font-serif leading-tight text-white sm:text-4xl lg:text-8xl lg:leading-tight p-8 m-4 lg:m-14 lg:p-14">My latest <span className='text-[#C48F56] '>projects.</span></h2>
            
            <TabsRender/>
        </div>
    );
};

export default Projects;