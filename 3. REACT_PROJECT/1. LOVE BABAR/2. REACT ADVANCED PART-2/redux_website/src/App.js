import { Route, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div>
      <div >
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
