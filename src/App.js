import React from 'react';
//import
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state = {
    activeUser: "ambrojessica",
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.activeUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      });
    axios.get(`https://api.github.com/users/${this.state.activeUser}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      });
  }

  componentDidUpdate(prevP, prevS) {
    if (this.state.user !== prevS.user) {
      console.log("user updated");
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      activeUser: e.target.value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.activeUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      });
  };

  render() {
    return (<div>
      <h1>Github Info</h1>
      <form onSubmit={this.handleClick}>
        <input onChange={this.handleChange} placeholder="User Search" />
        <button>Search</button>
      </form>
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} />
    </div>);
  }
}

export default App;
