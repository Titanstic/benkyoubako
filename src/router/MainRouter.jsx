import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import {routeDatas} from "../utils/routeData.jsx";
import NotFound from "../pages/NotFound.jsx";

const MainRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {
                        routeDatas.map(routeData => (
                            <Route key={routeData.path} path={routeData.path} element={routeData.element} />
                        ))
                    }
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default MainRouter;