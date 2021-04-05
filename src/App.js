import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

const List1 = (props) => (
  <div>
    {props.profiles.map(profile1 => <Names key={profile1.id} {...profile1} />)}
  </div>
);
class Names extends Component {

  render() {
    const profile = this.props;
    return (
      <div>
        <h3>{profile.name}</h3>
        <img src={profile.avatar_url} height="220px" alt="none"></img>
        <h4>{profile.company}</h4>
        <h1>-------------------</h1>
      </div>
    );
  }
}
class Search extends Component {
  state = { username: '' };
  handle = async (event) => {
    event.preventDefault();
    console.log(this.state.username)
    const getname = await axios.get(`https://api.github.com/users/${this.state.username}`);
    this.props.onSubmit(getname.data);



    this.setState({ username: '' });

  }
  render() {

    return (
      <div>
        <form onSubmit={this.handle}>
          <label>Name : </label>
          <input type="text"
            placeholder="name pls"
            required
            value={this.state.username}
            onChange={event => this.setState({ username: event.target.value })} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

      </div>

    )
  }
}

// All component here

class App extends Component {
  state = {
    profiles: [],
  };

  addnewprofile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <Header title="Hello Github Users" />
        <Search onSubmit={this.addNewProfile} />
        <List1 profiles={this.state.profiles} />
      </div>
    )
  }
}


export default App
