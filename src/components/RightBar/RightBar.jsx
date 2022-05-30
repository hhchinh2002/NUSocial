import { Users, FriendSuggestion } from "../test-data/test-data";
import './rightBar.css';
import Online from "../Online/Online";
import { Avatar } from "@mui/material";

const RightBar = () => {
  return (
    <div className="rightBarContainer">
      <div className="friendSuggestionContainer">
        <div className="friendSuggestionTitle">
          <span>There are <b>3</b> people that you may know</span>
        </div>
        <div className="friendSuggestion">
          {FriendSuggestion.map((u) => (
            <div className="friendSuggestionRequest">
              <Avatar src= {u.avatar} />
              <div className="friendSuggestName">
                {u.username}
              </div>
              <button className="sendFriendRequest">Send friend request</button>
            </div>
          ))}
        </div>
      </div>
      <div className="rightBarFriendListContainer">
        <div className="friendListTitle">Friends</div>
        <div className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightBar
