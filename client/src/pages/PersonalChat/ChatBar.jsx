import React, { useState } from 'react'
import './chatBar.css'
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined
} from "@mui/icons-material";

//todo: extract footer, body, and header as separate components to simplify this:
 const ChatBar = () => {

  const [input, setInput] =  useState("");

   const sendMessage = (e) => {
     e.preventDefault();
     console.log("You typed >>> ", input);
   };

  return (
    <div className = "chat">
    <div className = "chat_header">
    <Avatar src = "https://avatars.dicebear.com/api/micah/frend.svg" />
    
    <div className = "chat_headerInfo">
        <h3>Friend Name</h3>
        <p>Online/Offline</p>
    </div>

    <div className ="chat_headerRight">
    <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
    </div>
    </div>

    <div className = "chat_body">
    <p className = {`chat_msg ${false &&'chat_reciever'}`}> 
    {/*true means user is has sent msg, false means Friend 1 has sent msg */}
    <span className = "chat_name">Friend Name</span>
    Hi!
    <span className = "chat_timeStamp">4:00pm</span>
    </p>

    <p className = {`chat_msg ${true &&'chat_reciever'}`}> 
    <span className = "chat_name">You</span>
    Hello :D
    <span className = "chat_timeStamp">4:02pm</span>
    </p>

    </div>

    <div className = "chat_footer">
    <InsertEmoticon />
    <form>
    <input value = {input} 
    placeholder = "Type a message" 
    type = "text" 
      onChange = {e => setInput(e.target.value)}
    />
    <button onClick = {sendMessage} type = "submit"> Send a message</button>
    </form>
    <Mic />
    </div>
    </div>
  )
}

export default ChatBar;
