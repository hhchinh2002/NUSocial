import React from 'react'
import "./Msg.css"

const handleClick = e => {
    if(e.button === 0) {
        console.log("right click")
    }else {
        console.log("left click");
    }

}

function YourMessage({body, time_stamp}) {
    return (
        <div className = "YourMessage" onClick = {handleClick}>
    <span className = "chat_name">You</span>
    {body}
    <span className = "chat_timeStamp">
        {time_stamp}
    </span>
    </div>
    );
}

function FriendMessage({body, time_stamp}) {
    return (
        <div className = "FriendMessage">
    <span className = "chat_name">Friend 1</span>
    {body}
    <span className = "chat_timeStamp">
        {time_stamp}
    </span>
    </div>
    );
}

const Msg = ({body, time_stamp, flag}) => {

        return (
        
            <div className = "Msg">
           {flag === "true" ?
           <YourMessage body = {body} time_stamp = {time_stamp} />
           :
           <FriendMessage body = {body} time_stamp = {time_stamp} />
           }
            </div>
          )
    }
 

export default Msg;
