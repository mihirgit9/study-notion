import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { NoPage } from './pages/NoPage';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className=' bg-blue-950 w-[100vw] h-screen overflow-x-hidden'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <div className=' text-white w-full'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/dashboard' element={isLoggedIn ? (<Dashboard/>) : (<Navigate to='/login'/>)}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
