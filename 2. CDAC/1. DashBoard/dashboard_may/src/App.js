
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
       
      </Routes>
    
    </div>
  );
}

export default App;
