import React, {useState} from 'react';
import './post.css'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { ChatBubbleOutline } from '@mui/icons-material';
import Picker from "emoji-picker-react"

const Post = ({post}) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (event, emojiObj) => {
        setComment(prevInput => prevInput + emojiObj.emoji);
        setShowPicker(false);
      }
      const sendMessage = async() => {
        if (comment !== "") {
          const messageData = {
          comment: comment
          };

          setCommentsList((list) => [...list, messageData]);
          setComment("");
          setComments(comments + 1);
        }
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
            <div className="postText"> {post.text} </div>
            <img className="postImages" src={post.imageList} alt="" />
        </div>
        <div className="postInteraction">
            <div className="loveContainer">
                <FavoriteBorderIcon  sx = {{"&:hover": { color: "red" } }}   onClick = {() => setLikes(likes + 1)}/>
                {likes}
            </div>
            <div className="commentIconContainer">
                <ChatBubbleOutline sx = {{"&:hover": { color: "blue" } }}   onClick = {() => setComments(comments + 1)} />
                {comments}
            </div>
        </div>
        <div className="postBottom">
       {
        commentsList.map((comment) => {
           return (
            <div className = "comment" >
            <div className="postBottomAvatar">
                <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
            </div>
    {comment.comment}
            </div>
           )
        })
    }
    
              
            
            <div className="postBottomCommentBox">
            <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
            <input 
    type = "text"
    placeholder = "Add comment" 
    value = {comment}
    onChange={(event) => {
            setComment(event.target.value);
          }}
      onKeyPress = { (event) => {
      event.key === 'Enter' && sendMessage();  
    }}
    /> 
             
                <div className="additionStuff">
                    <InsertEmoticonIcon onClick = {() => setShowPicker(val => !val)}/>
                    {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
                    <InsertPhotoIcon  />
                </div>
            </div>
            <button className="postBottomSendButton" onClick = {sendMessage} >Send</button>
            <div className = "commentsBody">
      
        </div>
  
        </div>
    </div>
  )
}

export default Post
