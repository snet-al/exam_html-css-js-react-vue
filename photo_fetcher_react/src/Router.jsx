import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Cat from "./Pages/Cat.jsx";

const Router = () =>
    useRoutes([
        {
            path: "/",
            element: <Layout><Home /></Layout>,
        },
        {
            path: "/catfacts",
            element: (
                <Cat>
                    <h1>Navigated to new page</h1>
                </Cat>
            ),
        },
    ]);

export default Router;