import React , {useState, useEffect, useCallback} from 'react'
import ReactPlayer from "react-player"

import "./NewsAndNots.css"
import Header from '../../components/Header/Header';
import Draggable from "react-draggable"
import Logo from '../../components/Logo/Logo';
const clickedMenu = () => {
  
}


const NewsAndNots = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  
  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  const playVideo = () => {
    return (
        <div>
            <video src="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"></video>
        </div>
    )
}


  return (
    
    
    <div >
      <Header title = "News and Notifications" showHeaderCenter={true} showHeaderRight={true} link = "/home"/>
     <Draggable>
      <div> pull me</div>
     </Draggable>


 <h1>Right click somewhere on the page..</h1>
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x
          }}
          >
          <li onClick = {clickedMenu}>Share to..</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <hr className="divider" />
          <li>Refresh</li>
          <li>Exit</li>
        </ul>
        ) : (
        <> </>
      )}
      <ReactPlayer
      width="50px"
      height = "50px"
      controls
      url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"/>
   <Logo/>

   
    </div>
   

    



  )
}

export default NewsAndNots;
