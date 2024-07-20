import Home from "../pages/Home.jsx";
import QuestionPage from "../pages/QuestionPage.jsx";
import TestPage from "../pages/TestPage.jsx";

export const routeDatas = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/test/:level/:type",
        element: <TestPage/>
    },
    {
        path: "/test/:level/:type/:id",
        element: <QuestionPage/>
    },
    {
        path: "/test/:level/quiz",
        element: <QuestionPage/>
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