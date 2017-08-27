import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions';

class LobbyContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser : null
    };

    this.selectUser = this.selectUser.bind(this);
  }
  selectUser(username){
    console.log('selected', username);
  }
  render() {
    return (
      <div>
        <div>You are logged in as: {this.props.username}</div>
        <div>
          <ul>
            {
              this.props.users
                .filter( username => username !== this.props.username )
                .map( username =>
                  <li onClick={this.selectUser(username)}>
                    { username }
                  </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    users: state.users,
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

