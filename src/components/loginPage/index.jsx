import React, { useState } from 'react'
import './style.css'
import loginPic from '../../images/loginPagePic.jpg'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'

const LoginPage = () =>{
    const url = 'https://blogprojectbackend.onrender.com/auth/login';

    const [loginID, setLoginId] = useState("");
    const [password, setPassword] = useState();

   async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await axios.post(url, {loginID, password})
            console.log(response.data)
            console.log("hi")
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='Loginpage-container'>
            <div className="loginPage-left d-flex">
                <img src={loginPic} alt="computer" />
            </div>
            <div className="loginPage-right d-flex">
                <div className='login-form'>
                    <form>
                        <div className='input-container d-flex'>
                            <EmailIcon/>
                            <input type="text" placeholder='Username' name="loginID" onChange={(e)=>setLoginId(e.target.value)}/>
                        </div>
                        <div className='input-container d-flex'>
                            <LockIcon/>
                            <input type="password" placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button onClick={handleSubmit}>LOGIN</button>
                    </form>
                    <p style={{marginTop:"0.5rem", textAlign:"center"}}>Forgot <a href="#">Email/Password</a> ?</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
