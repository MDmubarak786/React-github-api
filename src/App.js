import React, { Component } from 'react';
import './App.css';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
const List1 = (props) => (
  <div>
    {props.profiles.map(profile1 => <Names {...profile1} />)}
  </div>
);
class Names extends Component {
  
  render() {
    const profile = this.props;
    return (
      <div>
        <h3>{profile.name}</h3>
        <img src={profile.avatar_url} height="220px"></img>
        <h4>{profile.company}</h4>
        <h1>-------------------</h1>
      </div>
    );
  }
}
class Search extends Component {
  handle = (event) => {
    event.preventDefault();
    console.log("hello")
  }
  render() {
   
    return (
      <div>
        <form onSubmit={this.handle}>
          <label>Name : </label>
          <input type="text" placeholder="name pls" required />
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
    profiles: testData,
  };

  render() {
    return (
      <div>
        <Header title="Hello Github Users" />
        <Search />
        <List1 profiles={this.state.profiles} />
      </div>
    )
  }
}


export default App
