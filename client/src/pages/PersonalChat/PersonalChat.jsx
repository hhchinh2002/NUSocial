import React, {useState} from 'react'
import './personalChat.css'
import SideBar from './SideBar'
import ChatBar from './ChatBar'
import Header from '../../components/Header/Header'
import io from "socket.io-client"


//SideBar contains contacts 
// ChatBar shows chat history and section to write and send message
// Header is by default shown on top to allow navigation to other pages
 const PersonalChat = () => {
  const socket = io.connect("http://localhost:3001");
  const [username, setUsername] = useState("username");
  const [chat, setChat] = useState("chat");
  
  return (
    <div className = "PersonalChat">
    <div className = "personalchat">
  <Header title = "Chat"  showHeaderCenter={true} showHeaderRight = {true} link = "/home"/>
    <div className = "personalchat_body">
      <SideBar socket = {socket}/>
      <ChatBar socket = {socket} username = {username} chat = {chat}  />
      </div>
      </div>
    </div>
  )
}

export default PersonalChat
