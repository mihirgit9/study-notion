import React, { useState } from 'react'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const SignupForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        accountType:'Student',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [isVisible, setIsVisible] = useState({isVisible1:false, isVisible2:false});
    
    function changeHandler(event){
        setSignupData((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        });
    }

    function accountHandler(event){
        setSignupData((prev)=>{
            return{
                ...prev,
                accountType:event.target.innerText
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(signupData.password===signupData.confirmPassword){
            toast.success('Account Created');
            setIsLoggedIn(true);
            navigate('/dashboard');
        }
        else{
            toast.error('Password does not match')
            return ;
        }
        
        const finalData ={
            ...signupData
        }
        console.log(finalData);
    }

  return (
    <form onSubmit={submitHandler}>
        {/* student-instructor-tab */}
        <div className='flex justify-between items-center gap-14 w-fit px-4 py-2 mb-4 rounded-full text-lg font-semibold bg-slate-900'>
            <p onClick={accountHandler} className={`${signupData.accountType === "Student" 
            ?
              "bg-slate-700 rounded-full text-white"
            :"bg-transparent"} px-6 py-1  cursor-pointer`}>Student</p>
            <p onClick={accountHandler} className={`${signupData.accountType === "Instructor" 
            ?
              "bg-slate-700  rounded-full text-white"
            :"bg-transparent"} px-6 py-1 cursor-pointer`}>Instructor</p>
        </div>

        {/* firstName-lastName */}
        <div className='flex justify-between items-center w-full gap-6'>
            <label>
                <p className='text-md tracking-wider mb-[2px]'>First Name <sup>*</sup></p>
                <input type='text' required
                    placeholder='Enter First Name'
                    name='firstName'
                    value={signupData.firstName}
                    onChange={changeHandler}
                    className=' w-full rounded-md h-[3.2rem] p-4  bg-black 
                    border-b-[1px] border-yellow-400 focus:border-white mb-3'
                />
            </label>

            <label>
                <p className='text-md tracking-wider mb-[2px]'>Last Name <sup>*</sup></p>
                <input type='text' required
                    placeholder='Enter Last Name'
                    name='lastName'
                    value={signupData.lastName}
                    onChange={changeHandler}
                    className=' w-full rounded-md h-[3.2rem] p-4 bg-black 
                    border-b-[1px] border-yellow-400 focus:border-white mb-3'
                />
            </label>
        </div>

        <label>
            <p className='text-md tracking-wider mb-[2px]'>Enter Email Address</p>
            <input type='email' required
                placeholder='Enter email address'
                name='email'
                value={signupData.email}
                onChange={changeHandler}
                className=' w-full rounded-md h-[3.2rem] p-4 bg-black 
                border-b-[1px] border-yellow-400 focus:border-white mb-3'
            />
        </label>

        <div>
            <label className='relative'>
                <p className='text-md tracking-wider mb-[2px]'>Create Password <sup>*</sup></p>
                <input type={isVisible.isVisible1 ? 'text' : 'password'} required
                    placeholder='Enter Password'
                    name='password'
                    value={signupData.password}
                    onChange={changeHandler}
                    className=' w-full rounded-md h-[3.2rem] p-4 bg-black 
                    border-b-[1px] border-yellow-400 focus:border-white mb-3'
                />
                <div className='absolute right-3 top-[2.5rem] z-8 cursor-pointer text-xl' 
                    onClick={()=>setIsVisible((prev)=>{
                        return{
                            ...prev,
                            isVisible1:!isVisible.isVisible1
                        }
                    })}
                >
                    {isVisible.isVisible1 ? (<BsEyeSlash/>) : (<BsEye/>)}
                </div>
            </label>

            <label className='relative'>
                <p className='text-md tracking-wider mb-[2px]'>Confirm Password <sup>*</sup></p>
                <input type={isVisible.isVisible2 ? 'text' : 'password'} required
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    value={signupData.confirmPassword}
                    onChange={changeHandler}
                    className=' w-full rounded-md h-[3.2rem] p-4 bg-black 
                    border-b-[1px] border-yellow-400 focus:border-white mb-3'
                />
                <div className='absolute right-3 top-[5.6rem] z-10 cursor-pointer text-xl' 
                    onClick={()=>setIsVisible((prev)=>{
                        return {
                            ...prev,
                            isVisible2: !isVisible.isVisible2
                        }
                    })}
                >
                    {isVisible.isVisible2 ? (<BsEyeSlash/>) : (<BsEye/>)}
                </div>
            </label>
        </div>

        <button className='w-full bg-yellow-400 text-black font-semibold p-2 rounded-md mt-8'>Create Account</button>

    </form>
  )
}
