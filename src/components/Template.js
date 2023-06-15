import React from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import {FcGoogle} from 'react-icons/fc'
import frameImage from "../assets/frame.png"

export const Template = ({ setIsLoggedIn, title, desc1, desc2, image, formtype}) => {
  return (
    <div className=' w-11/12 md:w-9/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-12 mt-8'>

        <div className='w-[90%] mx-auto sm:w-[75%] md:w-[425px] md:mx-0 mt-[2rem]'>
            <h1 className=' text-slate-100 text-3xl font-semibold'>{title}</h1>
            <p className='text-slate-300 text-xl mt-6'>{desc1}</p>
            <p className=' text-yellow-400 text-xl italic mb-6'>{desc2}</p>
            {formtype==='login' ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) : (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex justify-center items-center my-4 gap-2'> 
                <div className='w-[40%] h-[1px] bg-slate-500'></div>  
                <p className='text-slate-500'>OR</p> 
                <div className='w-[40%] h-[1px] bg-slate-500'></div> 
            </div>

            <button className='flex justify-center items-center gap-2 w-full border-[1px] border-slate-500 p-1 rounded-md hover:bg-slate-500 mb-6'>
                <FcGoogle/>
                Sign in with Google
            </button>
        </div>
        

        <div className='relative w-[70%] sm:w-[45%] md:w-[400px] mx-auto md:mx-0' >
            <img alt ='#' 
                src={frameImage} 
                width='100%'
                loading="lazy"
                className=' rounded-md '
            />
            <img alt='#' 
                src={image}
                width='100%'
                loading="lazy"
                className='absolute top-[-1rem] right-[1rem] rounded-md'
            />
        </div>
        
    </div>
  )
}

