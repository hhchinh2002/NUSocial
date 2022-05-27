import { Users } from "../testData";
import './rightBar.css';
import Online from "../Online/Online";

const RightBar = () => {
  return (
    <div className="rightBarContainer">
      <div className="friendSuggestionContainer">
        <div className="friendSuggestion">
          <span>There are <b>3</b> people that you might know...</span>
        </div>
      </div>
      <h4 className="rightBarTitle">Online Friends</h4>
      <div className="rightBarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </div> 
    </div>
  )
}

export default RightBar
