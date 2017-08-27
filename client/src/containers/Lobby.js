import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions';

class LobbyContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser : null
    };

    // this.usernameChange = this.usernameChange.bind(this);
  }
  usernameChange(e){
    this.setState({
      newUsername: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div>You are logged in as: {this.props.username}</div>
        <div>
          <ul>
            <li></li>
          </ul>
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
    // setUsername: username => {
    //   dispatch(setUsername(username))
    // }
  }
}

const Lobby = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);

export default Lobby;

