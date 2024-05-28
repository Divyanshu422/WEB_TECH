import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  // console.log('app called')
  return (
    <div className=''>
      <div  className="bg-slate-900">
        <Navbar/>  
      </div>
      <Routes>
        <Route path='/' element ={<Home/>} ></Route>
        <Route path='/cart' element ={<Cart/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
