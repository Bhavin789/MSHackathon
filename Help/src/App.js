import React, { useState } from "react";
import { Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Sidebar from "./components/navigation/Sidebar";
import Input from "./components/pages/Input";
import Body from "./components/Body";

import "./index.css";

const pages = [
  {
    name: "Input",
    iconClass: "fas fa-keyboard",
    path: "/input",
    component: Input
  }
];

const App = () => {
  const [sidebarIsShown, setSidebarIsShown] = useState(false);

  const toggleSideBar = () => {
    setSidebarIsShown(prev => !prev);
  };

  return (
    <div className="app">
      <Topbar toggleSidebar={toggleSideBar} />
      <div className="flex">
        <Sidebar sidebarIsShown={sidebarIsShown} pages={pages} location={"/"} />
        <Body>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.path}
                key={index}
                component={page.component}
              />
            );
          })}
        </Body>
      </div>
    </div>
  );
};

export default App;
