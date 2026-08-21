import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayout() {
    return(
        <main>
            <NavBar/>
            <Outlet/>
        </main>
    )
}

export default MainLayout
