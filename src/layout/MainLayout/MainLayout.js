import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
function MainLayout(props) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default MainLayout;