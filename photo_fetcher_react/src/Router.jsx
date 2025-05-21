import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import NewPage from "./Pages/NewPage.jsx";

const Router = () =>
    useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "goodbye", element: <About /> },
            ],
        },
        {
            path: "/new_page",
            element: (
                <NewPage>
                    <h1>Navigated to new page</h1>
                </NewPage>
            ),
        },
    ]);

export default Router;
