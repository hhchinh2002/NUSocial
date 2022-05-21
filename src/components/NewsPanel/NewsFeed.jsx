import React from 'react'
import './newsFeed.css'
import { Avatar } from '@mui/material'

// img: url of image that is in the background of the news feed
// profileIcon: url of image that is used int he profile icon
// title: describes the news in brief 
const NewsFeed = ({img, profileIcon, title}) => {
  const avatarStyle = {
    margin: "10px",
    border: "5px solid #7E9FE8  "
  }

  return (
    <div style = {{backgroundImage: `url(${img})`}} className = "NewsFeed">
    <Avatar className = "news_feed_avatar" src  = {profileIcon}
    style = {avatarStyle} />
    <h4>{title}</h4>
    </div>
  )
}



export default NewsFeed;
