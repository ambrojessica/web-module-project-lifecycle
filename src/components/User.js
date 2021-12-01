import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div id="card">
        <img src={user.avatar_url} />
        <a href={user.html_url}><h3>{user.name}</h3></a>
        <p>Total Repos: {user.public_repos}</p>
        <p>Total Followers: {user.followers}</p>
      </div>
    );
  }
}

export default User;