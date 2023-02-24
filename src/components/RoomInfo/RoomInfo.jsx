import React from 'react'
import './RoomInfo.css'
const RoomInfo = ({room , users}) => {
   
  return (
<div className='roomInfo'>
    <h1>Realtime Chat Application 💬</h1>
    {
        users ?
        (
            <div>
               <h2>People currently chatting:</h2>
               {users.map ((user , index) => (
                <div key={index} className='userBox'>
                    {user.name}
                </div>
               ) )}
            </div>
            
        ) 
        : null

    }
</div>
)

}
export default RoomInfo