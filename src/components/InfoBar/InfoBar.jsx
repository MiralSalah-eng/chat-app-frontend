import React from 'react'
import { Link } from 'react-router-dom'
import closeIcon from '../icons/close-svg.svg'
import onlineIcon from '../icons/online-svg.svg'
import './InfoBar.css'

const InfoBar = ({room}) => {
  return (
    <div className='infobar'>
      <div className='right'>
        <img src={onlineIcon}/>
        <h2>{room}</h2>

      </div> 


      <div className='leftIcon'>
       <Link to='/' >
       <img src={closeIcon}/>
       </Link>
      </div> 

    

    </div>
  )
}

export default InfoBar