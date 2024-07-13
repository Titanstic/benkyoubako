import {NavLink} from "react-router-dom";
import {navDatas} from "../utils/routeData.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

const activeLink = 'flex items-center gap-5 font-bold px-3 pb-2.5 text-primary border-b-4 border-primary  text-md m-2';
const normalLink = 'flex items-center gap-5 font-bold px-3 pb-2.5 text-md text-gray-700 border-b-4 border-transparent transition-all duration-300 ease-linear  origin-center  hover:text-primary hover:border-b-4 hover:border-primary m-2';

const NavBar = () => {
    const [showPhoneNav, setShowPhoneNav] = useState(false);

    const navHadler = () => {
        setShowPhoneNav(!showPhoneNav)
    }

    return(
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
                            <FontAwesomeIcon icon={faXmark} />
                            :
                            <FontAwesomeIcon icon={faBars} />
                    }
                </button>
                {/*    end logo*/}

                {/*start nav*/}
                <div className="hidden md:flex">
                    {
                        navDatas.map(nav => (
                            <NavLink to={nav.path} key={nav.name} className={({ isActive }) => (isActive ? activeLink : normalLink)} >
                                {nav.name}
                            </NavLink>
                        ))
                    }
                </div>
                {/*end nav*/}
            </div>


            <div className={`${showPhoneNav ? "flex flex-col items-center" : "hidden"}`}>
                {
                    navDatas.map(nav => (
                        <NavLink to={nav.path} key={nav.name}
                                 className={({isActive}) => (isActive ? activeLink : normalLink)}>
                            {nav.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
};

export default NavBar