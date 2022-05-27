import "./online.css"

const Online = ({user}) => {
  return (
    <li className="rightBarFriend">
        <div className="rightBarAvatarContainer">
            <img className="rightBarAvatar" src={user.avatar} alt="" />
            <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUsername">{user.userName}</span>
    </li>
  )
}

export default Online