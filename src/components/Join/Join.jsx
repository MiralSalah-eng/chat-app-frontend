import { useState } from 'react'
import { Link } from 'react-router-dom'
import groupImage from './chat.svg'
import './Join.css'

const Join = () => {
    const [name,setName] = useState("")
    const [room,setRoom] = useState("")

  return (
    <div className='joinOuterContainer'>
         <div className='joinInnerContainer'>
          {/* <img src={groupImage}/>  */}
          <h2>Join Room</h2>

          <div>
            <input className='joinInput' type='text' placeholder='Enter Your Name'
            onChange={(event)=> setName(event.target.value)} />
          </div>

          <div>
            <input className='joinInput' type='text' placeholder='Room Name'
            onChange={(event)=> setRoom(event.target.value)} />
          </div>

          <Link to={`/chat?name=${name}&room=${room}`}
          onClick={(event)=> ( !name || !room ) ? event.preventDefault() : null }>
            <button className='button' type='submit'>Join</button>
          </Link>

          
         </div>
    </div>
  )
}

export default Join