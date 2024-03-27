import React, {useState, useEffect} from 'react'
import './style.css'
import Header from '../header'
import axios from 'axios'

const Main= () => {
  const url = 'https://blogprojectbackend.onrender.com/follow/follow-list';
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
  async function getData(){
      const response = await axios.get(url,{
        withCredentials: true, 
      })
      console.log(response.data)
    }

   getData();
  }, [])
  

  return (
    <>
      <Header/>
      <div className='main-container'>
          <div className='main-left'></div>
          <div className="main-right">
            <div className='followers-container'>
              <div className="followers-li">

              </div>
            </div>
          </div>
      </div>
    </>
   
  )
}

export default Main
