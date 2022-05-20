import React from 'react'
import './sideBarChat.css'
import { Avatar } from '@mui/material'
import './sideBarChat.css'

const SideBarChat = ({addNewChat}) => {

    const createChat = () => {
        /*
        (1) Show friends list with whom there is no
        chat history
        (2) Prompt to find friends
        (3) Or create emptyChat with only yourself in it
        (4) Make a group 
        */
        const newChatId = prompt("Send Chat Request");
        if (newChatId ) {
        }
    };
    

  return !addNewChat ? (
    <div className = "sidebarchat">
    <Avatar src ="https://avatars.dicebear.com/api/micah/frend.svg" />
    <div className = "sidebarchat_info">
        <h2>Friend name</h2>
        <p>Last message ...</p>
    </div>
    </div>
  ): (
      <div onClick = {createChat} className = "sidebarchat">
          <h2>Add New Chat</h2>
      </div>
  );
}

export default SideBarChat;
