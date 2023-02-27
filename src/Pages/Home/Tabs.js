import React from "react";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap lg:w-[1450px] mx-auto">
                <div className="lg:w-[1200px] mx-auto">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white hover:text-[#C48F56] "
                                        : "text-white hover:text-[#C48F56]  ")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Creative and Wedding
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white hover:text-[#C48F56]"
                                        : "text-white hover:text-[#C48F56]")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Portraits
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white hover:text-[#C48F56]"
                                        : "text-white hover:text-[#C48F56]")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Natural and Beauty
                            </a>
                        </li>

                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-leftr">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 4
                                        ? "text-white hover:text-[#C48F56]"
                                        : "text-white hover:text-[#C48F56]")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                                Visual
                            </a>
                        </li>

                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 5
                                        ? "text-white hover:text-[#C48F56]"
                                        : "text-white hover:text-[#C48F56]")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist"
                            >
                               Branding
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/unusual-wedding-photography-sunset-in-muntains-with-silhouettes-newlyweds.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/the-man-and-the-woman-dancing-argentinian-tango-1.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/beautiful-mountain-scenery-in-dolomites-mountains.jpg" alt="" srcSet="" />
                                        </div>

                                        <div className="lg:-mt-80">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/portrait-of-fashion-model-black-painting-face-make-up-.jpg" alt="" srcSet="" />
                                        </div>

                                        <div></div>

                                        <div className="lg:-mt-72">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/elephant-at-sunrise-in-thailand.jpg" alt="" srcSet="" />
                                        </div>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/the-man-and-the-woman-dancing-argentinian-tango-1.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/beauty-portrait-of-a-female-fashion-model-with-curly-hair.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/fashion-brunette-model-portrait-1-1.jpg" alt="" srcSet="" />
                                        </div>

                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/tricolor-cat.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/nice-shot-young-man-photographing-his-beautiful-girlfriend-while-enjoying-romantic-date-on-the-lake.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/black-model-portrait.jpg" alt="" srcSet="" />
                                        </div>



                                        <div className="lg:-mt-72">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/bride-and-groom-in-a-hotel-room-the-groom-hugs-and-kisses-the-bride-in-the-neck-.jpg" alt="" srcSet="" />
                                        </div>


                                        <div className="lg:-mt-72">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/closeup-portrait-of-an-young-adult-girl-with-long-curly-hair-fashion-model.jpg" alt="" srcSet="" />
                                        </div>

                                    </div>
                                </div>


                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/classical-ballet-dancer-in-motion-on-the-stage-1-500x500.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/fashion-portrait-of-young-woman-photographer-with-camera-500x700.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/silver-and-gold-feather-background-650x650.jpg" alt="" srcSet="" />
                                        </div>

                                    </div>
                                </div>


                                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/closeup-portrait-of-an-young-adult-girl-with-long-curly-hair-fashion-model.jpg" alt="" srcSet="" />
                                        </div>
                                        <div>
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/black-model-portrait.jpg" alt="" srcSet="" />
                                        </div>
                                        <div className="">
                                            <img src="https://www.iconi.hocud.com/wp-content/uploads/2021/10/jumping-female-dancer-in-short-clothing-in-dark-background.jpg" alt="" srcSet="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
    return (
        <>
             <Tabs color="pink" />;
        </>
    );
}