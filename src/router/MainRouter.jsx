import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import {routeDatas} from "../utils/routeData.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

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

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default MainRouter;