import React from "react";
import NavBar from "../NavBar";
import "./index.scss";
import Footer from "../Footer";
import ScrollToTop from "../../hooks/useScrollToTop";

interface MainContainerProps {
  children?: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <ScrollToTop>
      <div className="main--container">
        <NavBar />
        <div className="main--content--container">{children}</div>
        <Footer />
      </div>
    </ScrollToTop>
  );
};

export default MainContainer;
