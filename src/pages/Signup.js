import React from 'react'
import signupImg from "../assets/signup.png"
import { Template } from '../components/Template';

export const Signup = (props) => {
  const setIsLoggedIn= props.setIsLoggedIn;
  return (
    <div>
      <Template
        setIsLoggedIn={setIsLoggedIn}
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
      />
    </div>
  )
}
