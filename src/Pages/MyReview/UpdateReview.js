import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const UpdateReview = () => {

    const userReview = useLoaderData();
    console.log(userReview);
    const [reviews, setReviews] = useState([]);

    const { user } = useContext(AuthContext)

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const editedReview = event.target.update.value;
        console.log(editedReview);

        const updateReview = {
            review: editedReview
        }

        //get the specific review to update
        fetch(`https://layers-photography-server.vercel.app/update/${userReview._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateReview)
        })
            .then(res =>  res.json()
            )
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                   toast.success("new review added")
                    event.target.reset();
                    //show the updated review
                    fetch(`https://layers-photography-server.vercel.app/my-review?email=${user?.email}`)
                        .then(res =>  res.json()
                        )
                        .then(data => {
                            console.log(data);
                           
                        })
                }
            })
    }

    
    return (
        <div className="overflow-hidden max-w-2xl mx-auto bg-black rounded-md shadow-md">
            <div className="p-10 my-10">
                <h2 className='text-xl text-white font-semibold mt-5 '>Edit your review</h2>
                <form onSubmit={handleUpdateReview}>
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
                                <textarea 
                                    className="textarea lg:h-[300px] h-[200px]  w-full textarea-bordered block  py-4 pl-10 pr-4 text-black text-2xl placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    placeholder="Enter your review"
                                    required
                                    name="update"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="inline-flex bg-[#C48836] items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Update Review
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;