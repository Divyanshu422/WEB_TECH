import React, { useContext } from 'react';
import { LayoutDashboard, FileChartColumnIncreasing, Users, Image, Trash2, Cog, HandHelping } from 'lucide-react';
import DashBoard from './DashBoard';
import { SideBarToggleContext } from '../../../context/SideBarToggleContext';



function SideBarItems() {
    const {expanded} = useContext(SideBarToggleContext);
    const items = [
        {
            id: 1,
            icons: <LayoutDashboard size={30} />,
            text: "DashBoard"
        },
        {
            id: 2,
            icons: <FileChartColumnIncreasing size={30} />,
            text: "Internal Files"
        },
        {
            id: 3,
            icons: <Users  size={30}/>,
            text: "Shared"
        },
        {
            id: 4,
            icons: <Image size={30} />,
            text: "Images"
        },
        {
            id: 5,
            icons: <Trash2  size={30} />,
            text: "Bin"
        },
        {
            id: 6,
            icons: <hr className=''/>,
            text: ' '
        },
        {
            id: 7,
            icons: <Cog size={30}/>,
            text: "Settings"
        },
        {
            id: 8,
            icons: <HandHelping size={30}/>,
            text: "Help"
        },
    ];
  
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} className={`relative flex px-3 py-2 my-1 items-center rounded-md cursor-pointer transition-colors group `}>
                    {item.icons}
                    <span className={`overflow-hidden transition-all ${(expanded)? "w-52 ml-3": "w-0"}`}>{item.text}</span>
                    {   
                // When expanded is false meaning the sideBar is closed hence we will show the floating text
                (!expanded) && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {item.text}
                    </div>
                )
            }
                </li>
            ))}
            
        </ul>
    );
}

export default SideBarItems;
