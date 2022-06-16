import React , {useState} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { ChatBubbleOutline } from '@mui/icons-material';
import Picker from "emoji-picker-react"

const Post = ({post}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [input, setInput] = useState("");
    const onEmojiClick = (event, emojiObj) => {
        setInput(prevInput => prevInput + emojiObj.emoji);
        setShowPicker(false);
      }
  return (
    <div className="postContainer">
        <div className="postTop">
            <div className="avatarContainer">
                <Avatar src={post.userAvatar} />
            </div>
            <div className="posterInfo">
                <div className="postOwner">
                    {post.userName}
                </div>
                <div className="postTime">
                    {post.time}
                </div>
            </div>
        </div>
        <div className="postDetail">
            {post.text}
            <img src={post.ImageList} alt="" />
        </div>
        <div className="postInteraction">
            <div className="loveContainer">
                <FavoriteBorderIcon sx = {{"&:hover": { color: "red" } }} />
                {post.love}
            </div>
            <div className="commentIconContainer">
                <ChatBubbleOutline sx = {{"&:hover": { color: "#EF7C00" } }} />
                {post.comment}
            </div>
        </div>
        <div className="postBottom">
            <div className="postBottomAvatar">
                <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
            </div>
            <div className="postBottomCommentBox">
            <form>
    <input id = "myInput" value = {input} 
    placeholder = "Add a comment" 
    type = "text" 
      onChange = {e => setInput(e.target.value)}
    /> 
   
    </form>
                <div className="additionStuff">
                <div className = "emoji_picker">
     <InsertEmoticon  onClick = {() => setShowPicker(val => !val)} />
     {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
     </div>
                    
                    <InsertPhotoIcon />
                </div>
            </div>
            <button className="postBottomSendButton">Send</button>
        </div>
    </div>
  )
}

export default Post