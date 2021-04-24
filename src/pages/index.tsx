import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountRoutes from "./account";

function Root() {
  return (
    <div>
      <AppLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/account" component={AccountRoutes} />
      </AppLayout>
    </div>
  );
}

export default Root;
