import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()


    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <>
            <div className='lg:max-w-[1400px] mx-auto align-middle justify-center pt-24  pb-24'>
                <div>
                    <progress className="progress w-full text-white bg-white mx-auto align-middle text-center"></progress>
                </div>
            </div>

        </>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />

};

export default PrivateRoute;