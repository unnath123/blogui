import React from 'react'
import Header from './components/header'
import Main from './components/Main'
import LoginPage from './components/loginPage'
import RegisterPage from './components/RegisterPage'
import {Routes, Route} from 'react-router-dom'
import { NavLink } from "react-router-dom"

const App = () => {
  return (
    <div>
      {/* <Main/> */}
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </div>
  )    
}

export default App