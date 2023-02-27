import React from 'react';

const HomeClient = () => {
    return (
        <div>
            <section className="py-10  sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-medium text-white">TRUSTED BY INDUSTRY LEADERS</h2>
                    </div>

                    <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
                        <div>
                            <img className="object-contain w-auto mx-auto " src="https://assets.website-files.com/630aafd6714b93fb5ac2e35d/631a58c8c2152c125c98a86b_Sitemark%20Logo.svg" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto mx-auto " src="https://assets.website-files.com/630aafd6714b93fb5ac2e35d/631a56ecc2152cb2f6988dbf_Greenish%20Logo.svg" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto  mx-auto" src="https://assets.website-files.com/630aafd6714b93fb5ac2e35d/631a57027a5e1e1a95b07222_Luminous%20Logo.svg" alt="" />
                        </div>

                        <div>
                            <img className="object-contain w-auto mx-auto" src="https://assets.website-files.com/630aafd6714b93fb5ac2e35d/631a5712698b797e1ef9d824_Waveless%20Logo.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeClient;