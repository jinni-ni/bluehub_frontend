import React from "react";
import "./AppLayout.scss";

interface RootType {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: RootType) => {
  return (
    <div className="app">
      <div className="header">Header</div>
      {children}
      <div className="footer">Footer</div>
    </div>
  );
};

export default AppLayout;
