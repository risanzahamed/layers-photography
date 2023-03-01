import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="py-10 bg-black sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 max-w-7xl">
                    <div >
                        <div>

                            <PhotoProvider>
                                <PhotoView src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                    <img className="object-cover w-[1200px] h-[450px]" src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-white">  </a>
                            </p>
                            <p className="mt-4 text-white"></p>


                            <p className="mt-6 text-xl text-white font-light loading">
                                Welcome to my photography services! My name is Noman, and I'm a professional photographer based in Bangladesh. I specialize in a range of photography services, including live event photoshoots, wedding photography, live videography, and wild photography. With my years of experience and passion for capturing beautiful moments, I'm committed to delivering stunning and timeless images that you'll treasure for years to come. <br />

                                   <br /> Live Event Photoshoots <br />
                                    From corporate events to music festivals, my live event photoshoots capture the energy and excitement of any occasion. I have the experience and expertise to document your event in a way that reflects the unique atmosphere and mood of the day. I'll work with you to create a tailored package that meets your needs, and I'm committed to delivering high-quality images that capture the essence of your event. <br />

                                  <br />  Wedding Photography <br />
                                    Your wedding day is one of the most special days of your life, and I'm here to help you capture those memories. My wedding photography services are tailored to your specific needs and preferences, from traditional shots to more creative, candid images. I'll work with you to create a customized package that includes everything from engagement photos to a full-day shoot. My goal is to create stunning images that you'll treasure for a lifetime. <br />

                                   <br /> Live Videography <br />
                                    If you're looking to capture the full experience of an event or occasion, my live videography services are the perfect solution. I specialize in creating dynamic and engaging videos that capture the energy and atmosphere of any event. From weddings to corporate events, I have the experience and equipment to create high-quality videos that tell your story in a compelling way.

                                  <br />  Wild Photography <br />
                                    Bangladesh is home to some of the most breathtaking natural beauty in the world, and my wild photography services are designed to capture the magic of these landscapes. Whether you're looking to document a safari or simply capture the beauty of the outdoors, I have the skills and equipment to deliver stunning images that truly showcase the majesty of nature. <br />

                                   <br /> My Approach <br />
                                    At the heart of my photography services is a commitment to capturing authentic and meaningful moments. I believe that the best images come from a combination of careful planning and being in the moment. That's why I take the time to get to know my clients, so I can understand their vision and work with them to create a customized plan that meets their specific needs.Once we've established the details of your shoot or event, I'll take care of the rest. I use the latest equipment and techniques to capture high-quality images and video, and I'll work tirelessly to ensure that every shot is perfect. From composition to lighting to post-production editing, I take a holistic approach to creating images that are both stunning and meaningful. <br />

                                    <br /> My Commitment to You <br />
                                    As a professional photographer, my goal is to deliver a seamless and stress-free experience for my clients. From the moment you contact me to the delivery of your final images, I'm committed to providing exceptional service and support. I'm passionate about what I do, and I take pride in creating images that truly capture the essence of your event or occasion. If you're looking for high-quality photography services in Bangladesh, look no further than my services. I'm committed to delivering exceptional results that you'll treasure for years to come. Contact me today to learn more about how I can help you capture your memories in a beautiful and timeless way. 
                            </p>
                        </div>

                        {/* show reviews */}

                        <div className='grid lg:grid-cols-3 gap-10'>

                        </div>



                        {/* review post */}





                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;