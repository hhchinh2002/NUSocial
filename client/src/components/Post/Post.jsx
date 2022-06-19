import React, {useState} from 'react';
import './post.css'
import { Avatar, ImageListItem, ImageList } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { ChatBubbleOutline } from '@mui/icons-material';

const Post = ({post}) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
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
            <div className="postBottomAvatar">
                <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg" />
            </div>
            <div className="postBottomCommentBox">
                <input 
                  placeHolder="Reply" 
                  className="reply"
                >
                </input>
                <div className="additionStuff">
                    <InsertEmoticonIcon />
                    <InsertPhotoIcon />
                </div>
            </div>
            <button className="postBottomSendButton">Send</button>
        </div>
    </div>
  )
}

export default Post
