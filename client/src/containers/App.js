import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions';
import './App.css';

class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      newUsername : ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }
  onSubmit(e){
    e.preventDefault();

    this.props.setUsername(this.state.newUsername);

    this.props.history.push('/lobby');
  }
  usernameChange(e){
    this.setState({
      newUsername: e.target.value
    });
  }
  render() {
    return (
      <form action="#" onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">Enter your username</label>
        </div>
        <div>
          <input
            type="text"
            id="username"
            onChange={this.usernameChange}
            value={this.state.newUsername} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
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
