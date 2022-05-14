import './header.css';
import { Chat, Home, Notifications, Search } from "@mui/icons-material";
import { Avatar } from '@mui/material';

const Header = ({title}) => {
  return (
    <div className="header">
        <div className="headerLeft">{title}</div>
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
              <Home fontSize='large' htmlColor='#EF7C00'/>
            </div>
            <div className="iconItem">
              <Notifications fontSize='large' htmlColor='#EF7C00'/>
              <span className="iconBadge">4</span>
            </div>
            <div className="iconItem">
              <Chat fontSize='large' htmlColor='#EF7C00'/>
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