import React, {useState} from "react";
import "./sideBar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SideBarChat from './SideBarChat';

function SideBar({socket}) {
  const joinRoom = () => {
    if (chat !== "") {
      socket.emit("join_room", chat);
    }
  };
  const [chats, setChats] = useState([])
  const [chat, setChat]= useState("")
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" onChange={(event) => {
              setChat(event.target.value); 
            }} onKeyPress = {e=>  {
             if(e.key === 'Enter'){
    setChats((list) => [...list, chat]  )
    joinRoom()
    setChat("")
  }
          } }/>
        </div>
      </div>
      <div className="sidebar_chats">
      {
        chats.map(chat => {
           return (
          <SideBarChat  chatName = {chat}/>
           )
        })
    }
      </div>
  
    </div>
  );
}

export default SideBar;
