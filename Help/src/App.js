import React, { useState } from "react";
import Button from "./components/button";
import Topbar from "./components/Topbar";
import Sidebar from "./components/navigation/Sidebar";
import Input from "./components/pages/Input";

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
      </div>

      <h1>Super cool page</h1>
      <Button onClick={() => console.log("I was clicked")}>
        I am a button
      </Button>
    </div>
  );
};

export default App;
