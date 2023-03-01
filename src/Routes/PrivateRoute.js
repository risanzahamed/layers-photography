import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Animation from '../Animation/Animation';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()


    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <>
            <div className='mx-aut text-center align-middle justify-center pt-24  pb-24'>
                <div>
                    <Animation/>
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