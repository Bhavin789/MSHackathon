import React, { useState } from "react";
import { Route } from "react-router-dom";

import Map from "mapmyindia-react";

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
        <Sidebar sidebarIsShown={true} pages={pages} location={"/"} />
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
        <Body>
          <Map
            markers={[
              {
                position: [18.5314, 73.845],
                draggable: true,
                title: "Marker title",
                onClick: e => {
                  console.log("clicked ");
                },
                onDragend: e => {
                  console.log("dragged");
                }
              }
            ]}
          />
        </Body>
      </div>
    </div>
  );
};

export default App;
