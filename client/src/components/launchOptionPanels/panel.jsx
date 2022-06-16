import React from 'react'
import './panel.css'
import { Avatar } from '@mui/material'
import { Link } from "@mui/material"

// img: url of image that is in the background of the news feed
// profileIcon: url of image that is used int he profile icon
// title: describes the news in brief 
const Panel = ({img, title, link, key}) => {
  const avatarStyle = {
    margin: "10px",
    border: "5px solid #7E9FE8  "
  }

  return (
    <Link href= {link}>
    <div style = {{backgroundImage: `url(${img})`}} className = "NewsFeed">
    <h4>{title}</h4>
    </div>
    </Link>
  )
}



export default Panel;
