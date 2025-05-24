import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CatPage from "./pages/CatPage.jsx";

const Router = () =>
    useRoutes([
        {
            path: "/",
            element: <Layout><HomePage /></Layout>,
        },
        {
            path: "/catfacts",
            element: (
                <CatPage/>
            ),
        },
    ]);

export default Router;