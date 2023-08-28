import React from "react";
import "../../App.css";
import ToggleSwitch from "../UI/ToggleSwitch/ToggleSwitch";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";


const Header = () => {
    return (
        <>
            <Title title="Photo Fetcher" />
            <section className="first-container">
                <ToggleSwitch/>
                <Button btnText="Fetch New Photos" />
            </section>
        </>
    );
};

export default Header;