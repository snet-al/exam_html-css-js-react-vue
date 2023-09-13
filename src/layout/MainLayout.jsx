import React from "react";
import Header from "./Header"; //po vendos 2 komponent qe me duhen ne cdo faqe
import Footer from "./Footer";

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
  
  
  
  
  
  