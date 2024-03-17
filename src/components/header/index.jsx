import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Drawer from '../../materialUIComp/Drawer'
import './style.css'

const Header = () => {
  return (
    <div>
        <div className="header-container">
          <div className="header-left d-flex">
            <div className='d-flex'>
              <ArticleIcon/>
            </div>
            <h1>The Blog App</h1>
          </div>
          <div className="header-right d-flex">
            <div className='header-buttons d-flex'>
              <div>
                <Button variant="contained" size="small">New Blog</Button>
              </div>
              <div>
                <Button variant="contained" size="small">Get All Blogs</Button>
              </div>
            </div>
            <div>
              <Drawer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header