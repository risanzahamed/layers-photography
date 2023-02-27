import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeGridGallary = () => {
    return (
        <div>
            <section className=" mx-auto sm:py-16 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-2 gap-10  sm:grid-cols-3 xl:grid-cols-4">
                        <div className='mt-10 slide-up'>

                            <PhotoProvider>
                                <PhotoView src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-3.jpg">
                                    <img src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-3.jpg" alt="" srcSet="" />
                                </PhotoView>
                            </PhotoProvider>

                        </div>

                        <div className='mt-10 slide-up'>

                            <PhotoProvider>
                                <PhotoView src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-5.jpg">
                                    <img src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-5.jpg" alt="" srcSet="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>

                        <div className='slide-up-2'>
                            <PhotoProvider>
                                <PhotoView src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-1.jpg">
                                    <img src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-1.jpg" alt="" srcSet="" />
                                </PhotoView>
                            </PhotoProvider>



                        </div>

                        <div className='mt-10 slide-up-2'>

                            <PhotoProvider>
                                <PhotoView src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-2.jpg">
                                    <img src="https://wpbingosite.com/wordpress/monisa/wp-content/uploads/2019/08/gallery-2.jpg" alt="" srcSet="" />
                                </PhotoView>
                            </PhotoProvider>



                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeGridGallary;