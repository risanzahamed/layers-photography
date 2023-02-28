import React from 'react';
import TabsRender from './Tabs';

const Projects = () => {
    return (
        <div>
             <h2 class="text-3xl text-center font-bold font-serif leading-tight text-white sm:text-4xl lg:text-8xl lg:leading-tight m-14 p-14">My latest <span className='text-[#C48F56] '>projects.</span></h2>
            
            <TabsRender/>
        </div>
    );
};

export default Projects;