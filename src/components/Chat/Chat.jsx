import './Chat.css'
import io from 'socket.io-client'

import InfoBar from '../InfoBar/InfoBar'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import { useState } from 'react'
import { useEffect } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import RoomInfo from '../RoomInfo/RoomInfo'

const Chat = () => {

  const [name , setName] = useState('')
  const [room , setRoom] = useState('')
  const [message , setMessage] = useState('')
  const [messages , setMessages] = useState([])
  const [users , setUsers] = useState()
  const navigate = useNavigate()
  
  const location = useLocation()
  const socket = io.connect('https://chat-app-server-xkqh.onrender.com');

  const shouldLog = useRef(true)

  useEffect(() => {
    
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name)

    if(shouldLog.current) {
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
          navigate('/')
        }
      });
    }

    return ()=> {
      shouldLog.current = false
    };
  }, [location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on('roomInfo' , ({users}) => {
      setUsers(users)
    })

}, []);


const sendMessage =  (event) => {
  event.preventDefault();
  console.log(message);
  if(message) {
   socket.emit('sendMessage', {name,message}, () => setMessage(''));
  }
}


  return (
    <div className='outerContainer'>
      <div className='innerContainer'>
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>

      <RoomInfo  room={room} users ={users}/>
    </div>
  )
}

export default Chat
