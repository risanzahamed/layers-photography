import React from 'react';

const UserBookedService = ({ booked }) => {

    return (
        <div>
            <div className="lg:max-w-xs p-6 rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">name : {booked.name}</span>
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400 mt-3">Booked Service : {booked.serviceCategory}</span>
                    <h2 className="block text-xs mt-3 font-medium tracking-widest uppercase dark:text-violet-400">Your Phone :{booked.phone}</h2>
                </div>
                <p className="dark:text-gray-100 ">Your Booked Date: <span className='font-semibold'>{booked.date}</span></p>
            </div>
        </div>
    );
};

export default UserBookedService;