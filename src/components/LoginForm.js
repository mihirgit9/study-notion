import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {BsEye, BsEyeSlash} from 'react-icons/bs'

export const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const [formData, setFormData] = useState({ email:'', password:''});
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev)=> {
            return{
                ...prev, 
                [event.target.name] : event.target.value
            }
        });
    }

    function submitHandler(event){
        event.preventDefault();
        navigate('/dashboard');
        setIsLoggedIn(true);
        toast.success('Logged In');
    }


  return (
    <form onSubmit={submitHandler}>
        <label>
            <p className='text-md tracking-wider mb-[2px]'>Email Address <sup className='text-red-500 text-lg relative top-[-3px]'>*</sup></p>
            <input type='email' required
                placeholder='Enter email address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className=' w-full rounded-md h-[3.2rem] p-4  ml-1 bg-black 
                border-b-[1px] border-yellow-400 focus:border-white mb-3'
            />
        </label>

        <label className=' w-full relative'>
            <p className='text-md tracking-wider mb-[2px]'>Password <sup className='text-red-500 text-lg relative top-[-3px]'>*</sup></p>
            <input type={isVisible ? 'text' : 'password'} required
                placeholder='Enter password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                className=' w-full rounded-md h-[3.2rem] p-4  ml-1 bg-black 
                border-b-[1px] border-yellow-400 focus:border-white mb-3'
            />

            <div className='w-full relative'>
                <span className='cursor-pointer text-xl absolute top-[-3rem] right-2' 
                    onClick={()=>setIsVisible((prev)=>!prev)}
                >
                    {isVisible ? (<BsEyeSlash/>) : (<BsEye/>)}
                </span>
            </div>
            

            <Link to='#'>
                <p className='w-fit text-blue-200 ml-auto -mt-2'
                >Forgot Password ?</p>
            </Link>
        </label>
       
        <button className='w-full bg-yellow-400 text-black font-semibold p-2 rounded-md mt-8'>Sign In</button>
    </form>
  )
}
