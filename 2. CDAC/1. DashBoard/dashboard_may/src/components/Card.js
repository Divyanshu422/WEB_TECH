import React from 'react';
import Img from '../Assets/Image.png';
import Leave from '../Assets/Leavenotes.png';
import Blocked from '../Assets/Blocked.jpeg';
import Modal from './cardData/Modal';
import { useState } from 'react';
import CountUp from 'react-countup';

const Card = () => {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    {
      id:1,
      image: Img,
      number:74,
      title: "Total active User",
      button: "See More"
    },
    {
        id:2,
        image: Leave,
        number: 34,
        title: "Holidays",
        button: "See More"
    },
    {
        id:3,
        image: Blocked,
        number: 56,
        title: "Blocked User",
        button: "Download"
    }
  ];

  function clickHandler(id) {
    console.log(id);
    if (id === 2) {
      setIsModalOpen(true);
    }
  }



  const hoverEffect = {
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out'
  };

  const number3D = {
    textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000',
  };

  return (
    <div>
      <div className='flex gap-10 ml-10 mt-10'>
          {data.map((item, index) => (
            <div key={index} className='bg-blue-900 flex gap-x-5 items-center rounded-lg hover:cursor-pointer hover:bg-slate-800' 
            onMouseEnter={(e) => e.currentTarget.style.transform = hoverEffect.transform} 
            onMouseLeave={(e) => e.currentTarget.style.transform = ''}>
               <div className='ml-8 border rounded-full bg-slate-300 '>
                  <img src={item.image} className='p-3 h-20 w-20 ' alt={item.title} />
               </div> 
                <div className='flex flex-col p-4 my-4'>
                    <h1 className='text-4xl text-white '  style={number3D}><CountUp end={item.number} /></h1>
                    <p className='text-sm pt-2 pb-1 text-white font-bold'>{item.title} </p>
                    <button className='bg-slate-400 py-2 rounded-md px-3 text-white hover:bg-blue-500' onClick={()=> clickHandler(item.id)} >{item.button}</button>
                </div>
            </div>
          ))}
      </div>

      {isModalOpen && <Modal onClose={()=>setIsModalOpen(false)}/>}
      
    </div>
  );
};

export default Card;
