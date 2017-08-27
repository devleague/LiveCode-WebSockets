import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username : ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }
  onSubmit(e){
    console.log(`Logging in as ${this.state.username}`);

    e.preventDefault();
  }
  usernameChange(e){
    this.setState({
      username: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Websockets Demo</h2>
        </div>
        <div className="App-intro">
          <form action="#" onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="username">Enter your username</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                onChange={this.usernameChange}
                value={this.state.username} />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
