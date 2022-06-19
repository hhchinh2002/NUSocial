import React from 'react';
import './header.css';
import { Chat, Home, Notifications, Search } from "@mui/icons-material";
import { Avatar } from '@mui/material';
import Logo from "../Logo/Logo";
import { Link } from '@mui/material';

const showingHeaderCenter = () => 
{
  return  (
  <div className="headerCenter">
  <div className="searchBar">
    <Search style={{marginLeft: "20px", fontSize: "25px"}}/>
    <input 
      placeholder="search for modules, friends,..." 
      className="searchInput"
    >
    </input>
  </div>
  </div>
  )
}


const showingHeaderRight = () => 
{
  return  (
    <div className="headerRight">
    <div className="headerIcon">
      <div className="iconItem">
      <Link href = "/home" >
        <Home fontSize='large' htmlColor='#1f3d85'/>
        </Link>
      </div>
      <div className="iconItem">
      <Link href = "/newsandnots">
        <Notifications fontSize='large' htmlColor='#1f3d85'/>
        </Link>
        <span className="iconBadge">4</span>
      </div>
      <div className="iconItem">
      <Link href = "/personalChat">
        <Chat fontSize='large' htmlColor='#1f3d85'/>
        </Link>
        <span className="iconBadge">3</span>
      </div>
    </div>
    <Link href = "/profile">
    <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg">
    3
    </Avatar>
    </Link>
  </div>
  )
}


const Header = ({link, title,showHeaderCenter, showHeaderRight}) => {
  return (
    <div className="header">
        <div className="headerLeft">
          <Logo link = {link} title = {title} />
          </div>
        {showHeaderCenter && showingHeaderCenter()}
        {showHeaderRight && showingHeaderRight()}  
    </div>
  )
}

Header.defaultProps = {
  title: 'NUSocial',
  showHeaderCenter: false,
  showHeaderRight: false
}

export default Header
