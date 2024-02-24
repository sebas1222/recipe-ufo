import React from "react";
import "./index.scss";
import NavBar from "../NavBar";

interface MainContainerProps {
  children?: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default MainContainer;
