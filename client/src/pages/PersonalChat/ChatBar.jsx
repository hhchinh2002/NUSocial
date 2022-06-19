import React, {useEffect, useState, useCallback} from 'react'
import axios from "axios"
import './chatBar.css'
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined
} from "@mui/icons-material";
import Picker from "emoji-picker-react"
import Draggable from "react-draggable"
import Msg from './Msg';


const clickedMenu = () => {
  console.log("clicked menu")
}

 const ChatBar = () => {

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  
  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });


  const [msgs, setMsgs] = useState([]);

    useEffect(() => {
        const getMsgs= async () => {
            const {data} = await axios.get(" http://localhost:8000/api/chats/allMsgs");
            console.log(data);
            setMsgs(data);
        }
        getMsgs()
    }, [])

    const addMsg = async () => {
      const data = {
        sender_nusocial_id: "e0862749",
        body: input
    }
    await axios.post(" http://localhost:8000/api/chats/addMsg", data)
    }
  
  const [input, setInput] =  useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObj) => {
    setInput(prevInput => prevInput + emojiObj.emoji);
    setShowPicker(false);
  }


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
    {
        msgs.map(msg => {
           return <li key = {msg.id}>
        <Msg body = {msg.body} time_stamp = "4pm" flag = "true"/> 
            </li>
        })
    }
    
    </div>

    <div className = "chat_footer">
    <Draggable>
    <div className = "emoji_picker">
     <InsertEmoticon fontSize = "large" onClick = {() => setShowPicker(val => !val)} />
     {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
     </div>
     </Draggable>
    <form>
    <input id = "myInput" value = {input} 
    placeholder = "Type a message" 
    type = "text" 
      onChange = {e => setInput(e.target.value)}
      onKeyDown = { (event) => {
      if (event.key === 'Enter') {
        console.log("Pressed Enter");
        console.log({input}); 
        addMsg();     
      }}
    }
    /> 
   
    </form>
    <Mic />
    </div>
    <div className= "contextMenu">
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x
          }}
          >
          <li onClick = {clickedMenu}>Share to..</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <hr className="divider" />
          <li>Refresh</li>
          <li>Exit</li>
        </ul>
        ) : (
        <> </>
      )}</div>
    </div>
  )
}

export default ChatBar;
