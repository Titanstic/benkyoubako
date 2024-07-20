import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {useSelector} from "react-redux";
import TestLoadingModal from "./modals/TestLoadingModal.jsx";

const Layout = () => {
    // redux
    const loading = useSelector((state) => state.apiQueryAndMutation.loading);

    return(
        <>
            <NavBar/>

            <Outlet/>
            {
                loading && <TestLoadingModal/>
            }
        </>
    )
}

export default Layout