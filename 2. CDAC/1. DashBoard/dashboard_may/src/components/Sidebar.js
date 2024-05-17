import { useState } from 'react';
import CDAC from '../Assets/CDAC.svg';
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import Img from '../Assets/2.jpeg';
import { FaUserEdit } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";



// Creating the menu array
const Menus = [
  {
    title: "Dashboard",
    icon: <RxDashboard />
  },
  {
    title: "User Management",
    icon: <FaUserEdit />,
    submenu: true,
    submenuItems:[
      {title: "User Master"},
      {title: "Group Master"}
    ]
  },
  {
    title: "Role Management",
    icon: <GrUserSettings />,
    submenu: true,
    submenuItems:[
      {title: "Role Master"},
      {title: "Role Menu Master"}
    ]
  },
  {
    title: "Menu Management",
    icon: <AiOutlineMenuUnfold />,
    submenu: true,
    submenuItems:[
      {title: "Menu Master"},
    ]
  },
  {
    title: "Logout",
    icon: <IoIosLogOut />
  }
];

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(Array(Menus.length).fill(false)); // Array to track open/close state of each submenu
    const [activeIndex, setActiveIndex] =useState(0);

    // Function to toggle the open/close state of a submenu
    const toggleSubmenu = (index) => {
        const newSubmenuOpen = [...submenuOpen];
        newSubmenuOpen[index] = !newSubmenuOpen[index];
        setSubmenuOpen(newSubmenuOpen);
    };

    return (
      <>
        <div>
            <div className='flex h-screen'>
                <div className={`bg-gradient-to-b from-white to-blue-950 h-screen p-5 pt-8 ${open?"w-72":"w-20"} relative transition-all duration-500`}>
                    <BsArrowLeftShort className={`bg-white text-3xl rounded-full absolute -right-4 border border-blue-800 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)}/>
            
                    <img src={Img} alt="Image not available" className='rounded-full px-2 w-18 h-18' />
                    <h1 className={`font-medium text-5xl p-5 pt-8 duration-300 items-centerjustify-center ${!open && "scale-0"}`}> Admin</h1>
                        
                    {/* Adding the elements: Menu items */}
                    <ul className="pt-2">
                        {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-black-800 text-xl flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9": "mt-2"} ${activeIndex === index ? " bg-[#7f78b1] text-white rounded-md font-semibold": " "}`
                            } onClick = {()=>{
                                setActiveIndex(index)}}>
                            <span className='text-xl block float-left rounded-full '>{menu.icon}</span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                            {menu.submenu && open && (<BsChevronDown className={`${submenuOpen[index] && "rotate-180"}`} onClick ={()=>toggleSubmenu(index)}/>)}
                            </li>
                            {menu.submenu && submenuOpen[index] && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, subIndex) => (<li key ={subIndex} className="text-black-800 text-xl flex item-center gap-x-4 cursor-pointer p-2 pl-10 hover:bg-light-white rounded-md">{submenuItem.title}</li>))}
                            </ul>
                            )}
                        </>
                        ))}
                    </ul>         
                    </div>
            </div>
              
        </div>
      </>
    );
}
