import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import SingleMyReview from './SingleMyReview';

const MyReview = () => {

    const [currentUserReview, setCurrentUserReview] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {

        fetch(`https://layers-photography-server.vercel.app/my-add-review?email=${user?.email}`)
            .then(res => res.json()
            )
            .then(data => {
                setCurrentUserReview(data);
            })
    }, [user?.email])

    console.log(currentUserReview.length);
    return (
        <div className='bg-[#040404]'>
            <div className='  lg:max-w-[1400px] mx-auto p-10'>
                
            {
                currentUserReview.length ? <div className=''>
                    <h2 className="text-3xl font-bold lg:p-10 leading-tight mx-auto  lg:text-center text-left text-white sm:text-4xl lg:text-5xl">All of your posted review</h2>
                    <div className='grid lg:grid-cols-3  gap-10 '>
                    
                    {
                        currentUserReview.map(singleReview => <SingleMyReview
                            key={singleReview._id}
                            singleReview={singleReview}
                        ></SingleMyReview>)
                    } 
                    </div>

                </div>: <h2 className="text-3xl font-bold leading-tight mx-auto  text-center text-white sm:text-4xl lg:text-5xl">You have no review yet</h2>
            }
        </div>
        </div>
    );
};

export default MyReview;