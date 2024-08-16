import React from "react";
import {
  Columns3,
  ChevronFirst,
  ChevronLast,
  MoreVertical,
} from "lucide-react";
import SideBarItems from "./SideBarItems";

import { useContext } from "react";
import { SideBarToggleContext } from "../../../context/SideBarToggleContext";
import { ThemeContext } from "../../../context/ThemeContext";

function SideBar({ children }) {
  const { expanded, setExpanded } = useContext(SideBarToggleContext);
  const { theme } = useContext(ThemeContext);
  return (
    // Aside => symmentic tag
    <aside className=" transition-all duration-500 ease-in-out">
      <nav
        className={` h-full ${
          theme == "light" ? "bg-[#134B70]" : "bg-[#1E201E]"
        } flex flex-col   shadow-sm`}
      >
        {/* Added the SideBar Component  */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            className="p-1.5 rounded-lg bg-gray-300 hover:bg-slate-600"
            onClick={() =>
              setExpanded((currentStateOfExpanded) => !currentStateOfExpanded)
            }
          >
            {expanded ? <Columns3 size={30} /> : <Columns3 size={30} />}
          </button>
        </div>
        {/*  Adding the elements of the SideBar */}
        <ul className="flex-1 px-3">
          <SideBarItems />
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
