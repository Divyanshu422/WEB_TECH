import React from "react";
import SideBar from "./SideBarComponent/SideBar";
import Navbar from "./HeaderComponent/Navbar";
import Footer from "./FooterComponent/Footer";
import Data from "./Data";
import Data2 from "./Data2";
function DashBoard() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-1">
        <SideBar />
        <div className="flex flex-col flex-1">
          <main className="flex-1">
            {/* <Data /> */}
            <Data2 />
          </main>
          <Footer /> {/* Place your Footer component here */}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
