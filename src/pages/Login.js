import React from 'react'
import { Template } from '../components/Template'
import loginImg from "../assets/login.png"

export const Login = (props) => {
  const setIsLoggedIn=props.setIsLoggedIn;
  return (
    <Template
      setIsLoggedIn={setIsLoggedIn}
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
    />
  )
}
