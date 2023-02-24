import React from 'react'
import { Form } from 'react-router-dom'
import './Input.css'

const Input = ({ message, setMessage , sendMessage }) => {
  return (
   <Form className='form'>
    <input  className='input' type='text' placeholder='Type Message ...' 
    value={message}
    onKeyDown = { event => event.key === 'enter' ? sendMessage(event) : null }
    onChange ={ event => setMessage(event.target.value)}
    />

    <button className='sendButton' type='submit'
    onClick={event => sendMessage(event)}
    >Send</button>
   </Form>
  )
}

export default Input