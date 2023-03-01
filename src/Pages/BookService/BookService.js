import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext';

const BookService = () => {

    

    const { user } = useContext(AuthContext)
    const [jobPost, setJobPost] = useState('')


    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.yourName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const serviceCategory = form.serviceCategory.value;
        const date = form.date.value;

        console.log(name, email, phone, serviceCategory, date);

        bookedService(name, email, phone, serviceCategory, date)
    }

    const bookedService = (name, email, phone, serviceCategory, date) => {
        const bookedServicePost = { name, email, phone, serviceCategory, date }

        fetch('https://layers-photography-server.vercel.app/booked-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedServicePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobPost(email)
                toast.success("The service you want is booked. Our Team will contact you!!")
            })
    }


    return (
        <div className='lg:w-[1550px] bg-black mx-auto'>
            <section className="bg-black">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center  justify-center px-4 py-10 bg-black sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="">
                            <h2 data-aos="flip-up"  data-aos-duration="1500" className="text-3xl font-bold leading-tight text-white sm:text-4xl">Use our Platfom and Book your Service</h2>

                            <form onSubmit={handleBookService} action="#" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label for="" className="text-base font-medium text-black"> Your Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="yourName"
                                                id=""
                                                placeholder="Provide your name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-base font-medium text-white"> Your Email </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue={user?.email}
                                                disabled
                                                id=""
                                                placeholder="Provide your name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label for="" className="text-base font-medium text-white"> Your Phone Number </label>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="phone"
                                                id=""
                                                placeholder="Enter your phone number"
                                                className="block w-full p-4 text-white placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label for="" className="text-base font-medium text-white"> Select Your Service </label>
                                        </div>
                                        <div className="mt-2.5 relative">
                                            <select type="select" className="select border  border-gray-200 w-full text-black text-lg " name="serviceCategory" required>
                                                <option disabled selected>Pick your service Category</option>
                                                <option className='font-semibold mt-10'>Wild Photography</option>
                                                <option className='font-semibold mt-10'>Live Videography</option>
                                                <option className='font-semibold mt-10'>Editing Services</option>
                                                <option className='font-semibold mt-10'>Wedding Photography</option>
                                                <option className='font-semibold mt-10'>Live Event</option>
                                                <option className='font-semibold mt-10'>Branding</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-base font-medium text-white mb-2'>Select Your Time</p>
                                        <input type="date"
                                            className="block w-full p-4 text-black placeholder-black transition-all duration-200 border border-gray-200 rounded-md  focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            name="date" id="lws-date" required />
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex bg-[#C48836] items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200  border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-center  px-4 py-10 sm:py-16 lg:py-24 bg-black sm:px-6 lg:px-8">
                        <div  data-aos="zoom-in"  data-aos-duration="1500">
                            <img className="w-[800px] mx-auto" src="https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_960_720.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BookService;