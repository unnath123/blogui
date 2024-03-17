import React from 'react'
import './style.css'
import loginPic from '../../images/loginPagePic.jpg'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () =>{
    return (
        <div className='Loginpage-container'>
            <div className="loginPage-left d-flex">
                <img src={loginPic} alt="computer" />
            </div>
            <div className="loginPage-right d-flex">
                <div className='login-form'>
                    <form action="">
                        <div className='input-container d-flex'>
                            <EmailIcon/>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className='input-container d-flex'>
                            <LockIcon/>
                            <input className='abcs' type="text" placeholder='Password' />
                        </div>
                        <button type='submit'>LOGIN</button>
                        <p style={{marginTop:"0.5rem", textAlign:"center"}}>Forgot <a href="#">Email/Password</a> ?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage