import React from 'react'
import logo from "../assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center w-11/12 md:w-9/12 mx-auto py-7'>
      <Link to='/'>
        <img alt='#' src={logo} width='155px'/>
      </Link> 

      <nav className='md:flex gap-5 text-yellow-300 hidden text-md'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='#'>About</NavLink>
        <NavLink to='#'>Contact</NavLink>
      </nav> 

      {
        isLoggedIn ? (
          <div className='flex gap-5 justify-between items-center text-white'>
            <button onClick={()=>{
              navigate('/login');
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}
              className=' border-solid border-white border-[1px] px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700'
            >
              Logout
            </button>
            <button onClick={()=> navigate('/dashboard')}
              className=' border-solid border-white border-[1px] px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700'
            >Dashboard</button>
          </div>

        ) : (
          <div className='flex gap-5 text-white'>
            <button onClick={()=> navigate('/login')}
              className=' border-solid border-white border-[1px] px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700'
            >Login</button>
            <button onClick={()=> navigate('/signup')}
              className=' border-solid border-white border-[1px] px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700'
            >Signup</button>
          </div>
        )
      }
    </div>
  )
}
