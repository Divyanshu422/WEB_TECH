import React from "react";
import SideBar from "./SideBarComponent/SideBar";
import Navbar from "./HeaderComponent/Navbar";
import Footer from "./FooterComponent/Footer";

function DashBoard() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-col flex-1">
          <main className="flex-1">{/* Your main content goes here */}</main>
          <Footer /> {/* Place your Footer component here */}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
