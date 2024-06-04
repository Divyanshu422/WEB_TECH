import React from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Charts from '../components/Charts'
import { useContext } from 'react'
import { DarkModeContext } from '../context/AppContext'

function Dashboard({isLoggedIn}) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className={`flex ${
      darkMode
        ? 'bg-[#040404] text-neutral-300'
        : 'bg-white dark:text-white'
      }`}>
           <Sidebar/>
           <div className={`flex-col w-screen ${
                darkMode
                  ? 'bg-[#040404] text-white'
                  : 'bg-white dark:text-white'
              }`}>
              <div className={``}>
                <Header/>  
              </div>
              <div >
                <Card/>
              </div>
              <div>
                <Charts/>
              </div>
              <div className='fixed bottom-0 w-full'>
                <Footer />
              </div>
          </div>
      </div>

                {/* <Card /> */}

     </div>    
  )
}

export default Dashboard