import React from 'react'
import './personalChat.css'
import SideBar from './SideBar'
import ChatBar from './ChatBar'
import Header from '../../components/Header/Header'

//SideBar contains contacts 
// ChatBar shows chat history and section to write and send message
// Header is by default shown on top to allow navigation to other pages
 const PersonalChat = () => {
  return (
    <div className = "PersonalChat">
    <div className = "personalchat">
   <Header />
    <div className = "personalchat_body">
      <SideBar/>
      <ChatBar  />
      </div>
      </div>
    </div>
  )
}

export default PersonalChat
