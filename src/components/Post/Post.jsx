import './post.css'
import { Avatar, ImageListItem, ImageList } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { ChatBubbleOutline } from '@mui/icons-material';

const Post = ({post}) => {
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
                <FavoriteBorderIcon />
                {post.love}
            </div>
            <div className="commentIconContainer">
                <ChatBubbleOutline />
                {post.comment}
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