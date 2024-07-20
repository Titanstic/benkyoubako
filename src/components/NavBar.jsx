import {NavLink} from "react-router-dom";
import {navDatas} from "../utils/routeData.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

const questionType = [
    {
        type: "Quiz",
    },
    {
        type: "Vocabulary",
    },
    {
        type: "Grammar",
    },
    {
        type: "Kanji",
    },
];

const activeLink = 'flex items-center gap-5 font-bold px-3 pb-2.5 text-primary border-b-4 border-primary  text-md m-2';
const normalLink = 'flex items-center gap-5 font-bold px-3 pb-2.5 text-md text-gray-700 border-b-4 border-transparent transition-all duration-300 ease-linear  origin-center  hover:text-primary hover:border-b-4 hover:border-primary m-2';

const NavBar = () => {
    const [showPhoneNav, setShowPhoneNav] = useState(false);
    const [level, setLevel] = useState("");
    const pathname = window.location.pathname;

    useEffect(() => {
        if(pathname.split("/")[2]){
            setLevel(pathname.split("/")[2])
        }else{
            setLevel("");
        }
    }, [pathname])

    const navHadler = () => {
        setShowPhoneNav(!showPhoneNav)
    }

    return(
        <>
            <div className="w-full bg-white  px-10 py-3 fixed top-0 z-50 shadow-md">
                <div className="flex items-center justify-between">
                    {/*    start logo*/}
                    <div className="w-10 h-10 bg-primary">
                    </div>
                    {/*    end logo*/}

                    {/*    start logo*/}
                    <button className="w-10 h-10 border border-primary block md:hidden" onClick={navHadler}>
                        {
                            showPhoneNav ?
                                <FontAwesomeIcon icon={faXmark}/>
                                :
                                <FontAwesomeIcon icon={faBars}/>
                        }
                    </button>
                    {/*    end logo*/}

                    {/*start nav for window size*/}
                    <div className="hidden md:flex">
                        {
                            navDatas.map(nav => (
                                <NavLink to={nav.path} key={nav.name}
                                         className={({isActive}) => (isActive ? activeLink : normalLink)}>
                                    {nav.name}
                                </NavLink>
                            ))
                        }
                    </div>
                    {/*end nav for window size*/}
                </div>
            </div>

            {/*start nav for phone size*/}
            <div className={`${showPhoneNav ? "w-full h-screen bg-white bg-opacity-80 fixed top-16 z-50" : "hidden"} `}>
                <div className="w-full h-full flex justify-end">
                    <div className="w-3/4 h-full flex flex-col justify-start items-end bg-white border-r shadow-md px-5">
                        {
                            navDatas.map(nav => (
                                <NavLink to={nav.path} key={nav.name}
                                         className={({isActive}) => (isActive ? activeLink : normalLink)}>
                                    {nav.name}
                                </NavLink>
                            ))
                        }
                        <hr className="w-full h-['1px'] bg-gray-600"/>

                        {
                            level !== "" &&
                                questionType.map(q => (
                                    <NavLink to={`/test/${level}/${q.type.toLowerCase()}`} key={q.type} className={({isActive}) => (isActive ? activeLink : normalLink)}>{ q.type }</NavLink>
                                ))
                        }

                    </div>
                </div>
            </div>
            {/*end nav for phone size*/}
        </>
    )
};

export default NavBar