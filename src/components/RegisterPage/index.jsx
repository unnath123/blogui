import React, { useState, useEffect } from 'react'
import './style.css'
import loginPic from '../../images/loginPagePic.jpg'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {
  const url = 'https://blogprojectbackend.onrender.com/auth/register';

  const [userInput, setUserInput] = useState({name:"", username:"", email:"", password:""});
  const [Registrationsuccess, setRegSuccess] = useState("");
  const navigate = useNavigate();

 async function handleRegister(e){
  console.log("gi")
    e.preventDefault()
    try{
      const response = await axios.post(url, userInput)
      console.log(response)
      if(response.data.status === 400){
        alert(response.data.message+" "+response.data.error)
        console.log(response.data.message)
      }
      else{
        navigate('/login')
        setRegSuccess("User registration successfull!")
      }
    }
    catch(err){
      console.log(err)
    }
  }


  function updateInput(e){
    setUserInput({...userInput, [e.target.name]:e.target.value})
  }

    // useEffect(() => {
    //   console.log(userInput)
    // }, [userInput])

  return (
  <>
      <div className='RegsiterPage-container'>  
      <div className="loginPage-right d-flex">
                <div className='login-form reg-color'>
                    <form>
                        <div className='input-container d-flex'>
                            <PersonIcon/>
                            <input type="text" placeholder='Name' name="name" onChange={updateInput}/>
                        </div>
                        <div className='input-container d-flex'>
                            <BadgeIcon/>
                            <input type="text" placeholder='Username' name="username" onChange={updateInput}/>
                        </div>
                        <div className='input-container d-flex'>
                            <EmailIcon/>
                            <input type="text" placeholder='Email' name="email" onChange={updateInput}/>
                        </div>
                        <div className='input-container d-flex'>
                            <LockIcon/>
                            <input type="password" placeholder='Password' name="password" onChange={updateInput}/>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </form>
                    <p style={{marginTop:"0.5rem", textAlign:"center"}}>Forgot <a href="#">Email/Password</a> ?</p>
                    <h4 style={{textAlign:"center", color:"green", marginTop:"1rem", backgroundColor:"white"}}>{Registrationsuccess}</h4>
                </div>
            </div>
    </div>
  </>
  )
}

export default RegisterPage