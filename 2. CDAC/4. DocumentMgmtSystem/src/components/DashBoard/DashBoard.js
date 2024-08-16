import React from "react";
import SideBar from "./SideBarComponent/SideBar";
import Navbar from "./HeaderComponent/Navbar";
function DashBoard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <SideBar />
    </div>
  );
}
export default DashBoard;
