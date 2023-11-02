import React from "react";
import Header from "../components/Header"; //po vendos 2 komponent qe me duhen ne cdo faqe
import Footer from "../components/Footer";
import Button from "../components/UI/Button";

  function MainLayout(props) {
    const {newImages, onToggleHandler, imageHandler } = props;

    return (
      <div>
        <Header newImages={newImages} onToggleHandler={onToggleHandler} />
        <main>
          {props.children}
        </main>
        <Button title="More Photos" onClick={imageHandler}/>
        <Footer/>
      </div>
    );
  }
 export default MainLayout;