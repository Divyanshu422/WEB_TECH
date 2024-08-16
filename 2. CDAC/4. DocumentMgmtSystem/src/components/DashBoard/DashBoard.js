import React from "react";
import SideBar from "./SideBarComponent/SideBar";
import Navbar from "./HeaderComponent/Navbar";
function DashBoard() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-1">
        <SideBar />
      </div>
    </div>
  );
}
export default DashBoard;
