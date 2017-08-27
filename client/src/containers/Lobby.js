import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inviteUser } from '../actions';

class LobbyContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser : null
    };

    this.selectUser = this.selectUser.bind(this);
    this.onInvite = this.onInvite.bind(this);
  }
  selectUser(username){
    return () => { // onClick handler
      this.setState({
        selectedUser : username
      });
    }
  }
  onInvite(){
    this.props.inviteUser( this.state.selectedUser );
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
                  <li
                    onClick={this.selectUser(username)}
                    className={ this.state.selectedUser === username ? 'selectedUser' : '' }
                    style={{cursor:'pointer'}}>
                    { username }
                  </li>
              )
            }
          </ul>
          <button onClick={this.onInvite} type="button">Invite to Game</button>
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
    inviteUser: selectedUser => {
      dispatch(inviteUser(selectedUser))
    }
  }
}

const Lobby = connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyContainer);

export default Lobby;

