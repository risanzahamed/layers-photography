import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import UserBookedService from './UserBookedService';

const MyBookedService = () => {

    const [userServiceBooked, setUserServiceBooked] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {

        fetch(`https://layers-photography-server.vercel.app/my-booked-service?email=${user?.email}`)
            .then(res => res.json()
            )
            .then(data => {
                setUserServiceBooked(data);
            })
    }, [user?.email])

    return (
        <div className='lg:max-w-[1400px] mx-auto p-10'>
            <div className='grid lg:grid-cols-3 mx-auto gap-10 m-10 '>
                {
                    userServiceBooked.length ? <>
                    {
                    userServiceBooked.map(booked => <UserBookedService
                        key={booked}
                        booked={booked}
                    ></UserBookedService>)
                }
                    </> : <h2 className='text-3xl font-bold leading-tight text-white sm:text-4xl'>You have no booking yet !</h2>
                }
            </div>
        </div>
    );
};

export default MyBookedService;