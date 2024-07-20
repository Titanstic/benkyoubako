import Card from "./Card.jsx";
import {Fragment} from "react";

const data = [
    {
        label:
            <svg className="absolute -left-7 top-4" xmlns="http://www.w3.org/2000/svg" width="113" height="50" viewBox="0 0 113 50" fill="none">
                <path
                    d="M0 20C0 8.95431 8.9543 0 20 0H97.1923C105.802 0 112.782 6.97982 112.782 15.5899C112.782 24.1353 105.903 31.0881 97.3578 31.1788L24.2482 31.9549V50L7.67059 37.0207C2.82879 33.2299 0 27.4224 0 21.2732V20Z"
                    fill="url(#paint0_linear_692_2454)"/>
                <defs>
                    <linearGradient id="paint0_linear_692_2454" x1="56.3911" y1="0" x2="56.3911" y2="50"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.6" stopColor="#C5227A"/>
                        <stop offset="1" stopColor="#80164F"/>
                    </linearGradient>
                </defs>
            </svg>
        ,
        borderColor: "border-[#C5227A]",
        color: "hover:bg-[#C5227A] hover:text-white",
        level: "N1"
    },
    {
        label:
            <svg className="absolute -left-7 top-4" xmlns="http://www.w3.org/2000/svg" width="113" height="50" viewBox="0 0 113 50" fill="none">
                <path
                    d="M0 20C0 8.95431 8.9543 0 20 0H97.1923C105.802 0 112.782 6.97982 112.782 15.5899C112.782 24.1353 105.903 31.0881 97.3578 31.1788L24.2482 31.9549V50L7.67059 37.0207C2.82879 33.2299 0 27.4224 0 21.2732V20Z"
                    fill="url(#paint0_linear_692_91)"/>
                <defs>
                    <linearGradient id="paint0_linear_692_91" x1="56.3911" y1="0" x2="56.3911" y2="50"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.6" stopColor="#DF7C0F"/>
                        <stop offset="1" stopColor="#804709"/>
                    </linearGradient>
                </defs>
            </svg>,
        borderColor: "border-[#DF7C0F]",
        color: "hover:bg-[#DF7C0F] hover:text-white",
        level: "N2"
    },
    {
        label:
            <svg className="absolute -left-7 top-4" xmlns="http://www.w3.org/2000/svg" width="113" height="50"
                 viewBox="0 0 113 50" fill="none">
                <path
                    d="M0 20C0 8.95431 8.9543 0 20 0H97.1923C105.802 0 112.782 6.97982 112.782 15.5899C112.782 24.1353 105.903 31.0881 97.3578 31.1788L24.2482 31.9549V50L7.67059 37.0207C2.82879 33.2299 0 27.4224 0 21.2732V20Z"
                    fill="url(#paint0_linear_692_2760)"/>
                <defs>
                <linearGradient id="paint0_linear_692_2760" x1="56.3911" y1="0" x2="56.3911" y2="50"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.6" stopColor="#54C20B"/>
                        <stop offset="1" stopColor="#378007"/>
                    </linearGradient>
                </defs>
            </svg>,
        borderColor: "border-[#54C20B]",
        color: "hover:bg-[#54C20B] hover:text-white",
        level: "N3"
    },
    {
        label:
            <svg className="absolute -left-7 top-4" xmlns="http://www.w3.org/2000/svg" width="113" height="51" viewBox="0 0 113 51" fill="none">
                <path
                    d="M0 20.5C0 9.45431 8.9543 0.5 20 0.5H97.1923C105.802 0.5 112.782 7.47982 112.782 16.0899C112.782 24.6353 105.903 31.5881 97.3578 31.6788L24.2482 32.4549V50.5L7.67059 37.5207C2.82879 33.7299 0 27.9224 0 21.7732V20.5Z"
                    fill="url(#paint0_linear_692_295)"/>
                <defs>
                    <linearGradient id="paint0_linear_692_295" x1="56.3911" y1="0.5" x2="56.3911" y2="50.5"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.6" stopColor="#008F74"/>
                        <stop offset="1" stopColor="#008067"/>
                    </linearGradient>
                </defs>
            </svg>,
        borderColor: "border-[#008F74]",
        color: "hover:bg-[#008F74] hover:text-white",
        level: "N4"
    },
    {
        label:
            <svg className="absolute -left-7 top-4" xmlns="http://www.w3.org/2000/svg" width="113" height="51" viewBox="0 0 113 51" fill="none">
                <path
                    d="M0 20.5C0 9.45431 8.9543 0.5 20 0.5H97.1923C105.802 0.5 112.782 7.47982 112.782 16.0899C112.782 24.6353 105.903 31.5881 97.3578 31.6788L24.2482 32.4549V50.5L7.67059 37.5207C2.82879 33.7299 0 27.9224 0 21.7732V20.5Z"
                    fill="url(#paint0_linear_692_1118)"/>
                <defs>
                    <linearGradient id="paint0_linear_692_1118" x1="56.3911" y1="0.5" x2="56.3911" y2="50.5"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.6" stopColor="#0039B0"/>
                        <stop offset="1" stopColor="#002980"/>
                    </linearGradient>
                </defs>
            </svg>
        ,
        borderColor: "border-[#0039B0]",
        color: "hover:bg-[#0039B0] hover:text-white",
        level: "N5"
    }
]



const Level = () => {
    return (
        <div className="w-full flex justify-start items-center flex-col mb-24">
            <p className="text-3xl text-center font-bold text-primary">What is</p>

            <div className="w-[60%] mx-auto grid grid-cols-6 justify-items-center items-center gap-x-2 gap-y-10 mt-10">
                {
                    data.map((d, index) => (
                        <Fragment key={index}>
                            {
                                index === 3 && <div className="col-span-1 hidden md:block"> </div>
                            }
                            <Card color={d.color} label={d.label} borderColor={d.borderColor} level={d.level} key={d.level}/>

                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
};
export default Level;