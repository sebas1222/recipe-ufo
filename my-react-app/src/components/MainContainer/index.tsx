import React from "react";
import NavBar from "../NavBar";
import "./index.scss";

interface MainContainerProps {
  children?: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="main--container">
      <NavBar />
      <div className="main--content--container">{children}</div>
    </div>
  );
};

export default MainContainer;
