import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions';
import logo from './logo.svg';
import './App.css';

class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      username : ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }
  onSubmit(e){
    this.props.setUsername(this.state.newUsername);

    e.preventDefault();
  }
  usernameChange(e){
    this.setState({
      newUsername: e.target.value
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
                value={this.state.newUsername} />
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

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsername: username => {
      dispatch(setUsername(username))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

export default App;
