import React from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Dashboard({isLoggedIn}) {
  return (
    <div>
      <div className='flex'>
           <Sidebar/>
           <div className='flex-col bg-stone-50 w-screen '>
              <div className=' bg-white'>
                <Header/>  
              </div>
              <div >
                <Card/>
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