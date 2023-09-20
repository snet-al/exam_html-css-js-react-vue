import React from "react";
import Header from "../components/Header"; //po vendos 2 komponent qe me duhen ne cdo faqe
import Footer from "../components/Footer";

function MainLayout(props) {
    return (
      <div>
        <Header/>
        <main>
          {props.children}
        </main>
        <Footer/>
      </div>
    );
  }
  
 export default MainLayout;
  
  
  
  
  
  