const Welcome = () => {
    return(
        <div className="w-full h-screen flex justify-center md:justify-around items-center md:flex-row flex-col">
            <div className="w-[98%] md:w-[50%] text-primary mb-20 md:mb-0">
                <p className="font-extrabold text-xl md:text-3xl">Maximize Your JLPT Success with Expert Practice!</p>
                <p className="md:text-lg my-5">Prepare for your JLPT test with our expert practice sessions. Join us to
                    enhance your skills and achieve your highest score ever. Start practicing today and see the
                    difference!</p>
                <button className="border border-primary rounded-lg hover:bg-primary hover:text-white px-5 md:px-10 py-3">
                    Test
                    Now
                </button>
            </div>

            <div className="relative">
                <svg className="w-[300px] h-[200px] md:w-[400px] md:h-[298px] " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 298" fill="none">
                    <path
                        d="M400 20.404C400 8.46289 389.604 -0.817471 377.74 0.532123L17.7396 41.4821C7.63367 42.6317 0 51.1829 0 61.354V218.556C0 228.551 7.37967 237.012 17.2826 238.37L87.5 248L81 298L128.5 248L378.13 271.446C389.863 272.548 400 263.318 400 251.534V20.404Z"
                        fill="url(#paint0_linear_428_4052)"/>
                    <defs>
                        <linearGradient id="paint0_linear_428_4052" x1="200" y1="-2" x2="200" y2="264.667"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D88249"/>
                            <stop offset="1" stopColor="#844F2C"/>
                        </linearGradient>
                    </defs>
                </svg>

                <svg className="w-[300px] h-[180px] md:w-[400px] md:h-[265px] absolute left-0 top-0 translate-x-8 z-0"  xmlns="http://www.w3.org/2000/svg" width="400" height="265" viewBox="0 0 400 265" fill="none">
                    <path
                        d="M1.5 20.404C1.5 9.35846 11.1162 0.774137 22.0909 2.02251L382.091 42.9725C391.439 44.0358 398.5 51.9457 398.5 61.354V244.667C398.5 254.884 390.217 263.167 380 263.167H20C9.78274 263.167 1.5 254.884 1.5 244.667V20.404Z"
                        stroke="#834D2A" strokeWidth="3"/>
                </svg>

                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-white text-center">
                    <p className="text-xl md:text-5xl font-bold">128</p>
                    <p className="text-xl md:text-5xl">Days Left</p>
                </div>
            </div>
        </div>
    )
};

export default Welcome