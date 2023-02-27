import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import UserReview from './UserReview';

const PostDetails = () => {
    const post = useLoaderData()

    const { user } = useContext(AuthContext)
    const email = user?.email;

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://layers-photography-server.vercel.app/reviews/${post._id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [post._id])



    const handlePostReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.userName.value;
        const review = form.review.value;
        console.log(name, review);

        const postedReview = {
            review: review,
            name,
            serviceId: post._id,
            serviceName: post.serviceName,
            serviceImage: post.image,
            servicePrice: post.packagePrice,
            email,
        }

        fetch(`https://layers-photography-server.vercel.app/reviews/${post._id}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("review added");
                    form.reset();
                    fetch(`https://layers-photography-server.vercel.app/reviews/${post._id}`)
                        .then(res => res.json())
                        .then(data => setReview(data))
                }
            })

    }
    return (
        <div>
            <section className="py-10 bg-black sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 max-w-7xl">
                    <div >
                        <div>

                            <PhotoProvider>
                                <PhotoView src={post.image}>
                                    <img className="object-cover w-[1200px] h-[450px]" src={post.image} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> {post.categoryName} </span>
                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-white"> {post.serviceName} </a>
                            </p>
                            <p className="mt-4 text-white">{post.details}</p>


                            <p className="mt-6 text-xl font-semibold">
                                <a href="#" title="" className="text-white"> {post.packagePrice} </a>
                            </p>
                        </div>

                        {/* show reviews */}

                        <div className='grid lg:grid-cols-3 gap-10'>
                            {
                                review.map(singleReview => <UserReview
                                    key={singleReview._id}
                                    singleReview={singleReview}
                                    user={user}
                                ></UserReview>)
                            }
                        </div>



                        {/* review post */}

                        <h2 className='text-2xl font-semibold text-white mt-24'>Post Your Review Here</h2>

                        {
                            user?.uid ? <div className="overflow-hidden max-w-2xl bg-black rounded-md shadow-md">
                                <div className=" my-10">
                                    <form onSubmit={handlePostReview}>
                                        <div className="space-y-5">
                                            <div>
                                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                    <input
                                                        defaultValue={user?.displayName}
                                                        type="text"
                                                        required
                                                        name="userName"
                                                        id=""
                                                        placeholder="Your Name"
                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 text-2xl transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">

                                                </div>
                                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                    <textarea name='review'
                                                        className="textarea h-[300px] w-[900px] textarea-bordered block  py-4 pl-10 pr-4 text-black text-2xl placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                        placeholder="Enter your review"
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                    Post Review
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> :
                                <>
                                    <h2 className='text-xl text-white font-semibold mt-5 '>You need to login or register 1st for post a review.. <br />
                                        Thank You
                                    </h2>
                                    <div className='flex align-middle '>
                                        <Link to="/login" ><button className='btn btn-primary mt-5 text-white'>Login Now</button></Link>
                                        <h2 className='text-xl text-white font-semibold pt-8 p-10 '> Or </h2>
                                        <Link to="/register" ><button className='btn btn-primary mt-5 text-white'>Sign Up Now</button></Link>
                                    </div>
                                </>

                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostDetails;