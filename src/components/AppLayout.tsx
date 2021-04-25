import React from "react";
import "./AppLayout.scss";
import Navbar from "./Navbar";

interface RootType {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: RootType) => {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="contents">{children}</div>
      <div className="footer">
        <div>Footer</div>
      </div>
    </div>
  );
};

export default AppLayout;
