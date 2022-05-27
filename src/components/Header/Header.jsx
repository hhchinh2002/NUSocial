import './header.css';
import { Chat, Home, Notifications, Search } from "@mui/icons-material";
import { Avatar } from '@mui/material';
import Logo from "../Logo/Logo";

const Header = ({title}) => {
  return (
    <div className="header">
        <div className="headerLeft">
          <Logo/>
          {title}
          </div>
        <div className="headerCenter">
          <div className="searchBar">
            <Search style={{marginLeft: "20px", fontSize: "25px"}}/>
            <input 
              placeHolder="search for modules, friends,..." 
              className="searchInput"
            >
            </input>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerIcon">
            <div className="iconItem">
              <Home fontSize='large' htmlColor='#1f3d85'/>
            </div>
            <div className="iconItem">
              <Notifications fontSize='large' htmlColor='#1f3d85'/>
              <span className="iconBadge">4</span>
            </div>
            <div className="iconItem">
              <Chat fontSize='large' htmlColor='#1f3d85'/>
              <span className="iconBadge">3</span>
            </div>
          </div>
          <Avatar>3</Avatar>
        </div>
        
    </div>
  )
}

Header.defaultProps = {
  title: 'NUSocial',
}

export default Header