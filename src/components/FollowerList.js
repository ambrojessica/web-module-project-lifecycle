import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div id="followers">
        {
          this.props.followers.map(follower => (
            <Follower follower={follower} />
          ))
        }

      </div>
    );
  }
}

export default FollowerList;