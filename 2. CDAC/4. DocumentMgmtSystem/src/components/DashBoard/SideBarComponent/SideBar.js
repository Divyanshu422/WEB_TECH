import React from 'react'
import { Columns3, ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import SideBarItems from './SideBarItems'

//  Importing the image of user and Logo From Assets Folder
import FileManangementLogo from '../../../Assets/FileManangementLogo.png' 
import User_Image from '../../../Assets/User_Image.png'
import { useContext } from 'react';
import { SideBarToggleContext } from '../../../context/SideBarToggleContext';

function SideBar({children}) {

  const {expanded, setExpanded} = useContext(SideBarToggleContext);

  return (  
    // Aside => symmentic tag
    <aside className='h-screen  '>
      <nav className=" h-full bg-gradient-to-b from-blue-50  to-indigo-100 flex flex-col bg-white border-2 shadow-sm">

        {/* Added the SideBar Component  */}
        <div className='p-4 pb-2 flex justify-between items-center'>
          <button className='p-1.5 rounded-lg bg-gray-300 hover:bg-slate-600' onClick ={()=>setExpanded((currentStateOfExpanded)=>!currentStateOfExpanded)}>
            {expanded? <Columns3 size={30} />: <Columns3 size={30} />}
          </button>
        </div>
        {/*  Adding the elements of the SideBar */}
        <ul className='flex-1 px-3'>
          <SideBarItems/>
        </ul>

      </nav>
    </aside>
  )
}

export default SideBar