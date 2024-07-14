import Home from "../pages/Home.jsx";
import TestPage from "../pages/TestPage.jsx";

export const routeDatas = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/test/:type/:id",
        element: <TestPage/>
    }
];

export const navDatas = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/blog",
        name: "Blog",
    },
    {
        path: "/account",
        name: "Account",
    }
]