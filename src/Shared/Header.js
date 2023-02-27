import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Header = () => {
    const { user, UserlogOut } = useContext(AuthContext)

    const handleUserLogout = () => {
        UserlogOut()
            .then(toast.success('User logged out!'))
            .catch(error => console.log(error))
    }

    const [state, setState] = useState(false)
    const navRef = useRef()
    return (
        <div>
            <nav ref={navRef} className="bg-[#040404] w-full top-0 z-20">
                <div className="items-center px-4 max-w-screen-2xl mx-auto lg:flex lg:px-8">
                    <div className="flex items-center p-3 justify-between py-3 lg:py-4 lg:block">
                        <Link to='/'>
                            <img
                                className='p-2'
                                src='https://assets.website-files.com/630aafd6714b93fb5ac2e35d/63190ef665858f1183ec0def_logo-portrait-template.svg'

                                alt="Float UI logo"
                            />
                        </Link>

                        <div className="lg:hidden">

                            <button className="text-white p-3 outline-none  rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                        <div>
                            <ul className="flex mt-1 flex-col-reverse space-x-0  lg:flex-row">

                                {
                                    user?.uid ?

                                        <li className="mt-4 lg:p-8 p-3 lg:mt-0">
                                            <Link onClick={handleUserLogout} cursor-pointer="true" className="py-3 px-4 text-center text-black bg-white  rounded-xl hover:bg-gray-600  shadow block lg:inline">
                                                LogOut
                                            </Link>
                                        </li> :
                                        <>
                                            <li className="mt-4 lg:p-8 lg:mt-0">
                                                <Link to='/login' className="py-3 px-4 font-semibold text-center border text-white rounded-xl hover:text-indigo-600 block lg:inline lg:border-0">
                                                    Sign in
                                                </Link>
                                            </li>
                                            <li className="mt-8 lg:p-8 lg:mt-0">
                                                <Link to='/register' className="py-3 px-4 font-semibold text-center text-black bg-white  rounded-xl hover:bg-gray-600  shadow block lg:inline">
                                                    Create free account
                                                </Link>
                                            </li>
                                        </>
                                }
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul className="justify-center p-6 text-white font-semibold items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                <Link className='p-3 ' to='/'><li>Home</li></Link>
                                <Link className='p-3' to='/services'><li>Services</li></Link>
                                {
                                    user?.uid ? <>
                                        <Link className='p-3' to='/book-a-service'><li>Book A Service</li></Link>
                                        <Link className='p-3' to='/my-booked-service'><li>My Booked Service</li></Link>
                                        <Link className='p-3' to='/reviews'><li>My Reviews</li></Link>

                                    </> : <></>
                                }
                                <Link className='p-3' to='/blog'><li>Blog</li></Link>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>



        </div>

    );
};

export default Header;